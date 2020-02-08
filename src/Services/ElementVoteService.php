<?php

/**
 * This file is part of the GoGoCarto project.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @copyright Copyright (c) 2016 Sebastian Castro - 90scastro@gmail.com
 * @license    MIT License
 * @Last Modified time: 2018-02-11 13:06:48
 */

namespace App\Services;

use App\Document\ElementStatus;
use App\Document\ModerationState;
use App\Document\UserInteractionVote;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class ElementVoteService
{
    /**
     * Constructor.
     */
    public function __construct(DocumentManager $dm, TokenStorageInterface $securityContext, ConfigurationService $confService, ElementPendingService $elementPendingService)
    {
        $this->dm = $dm;
        $this->user = $securityContext->getToken() ? $securityContext->getToken()->getUser() : null;
        $this->confService = $confService;
        $this->securityContext = $securityContext;
        $this->elementPendingService = $elementPendingService;
    }

    // Handle a vote (positive or negative) for pending elements
    public function voteForElement($element, $voteValue, $comment, $userEmail = null)
    {
        // Check user don't vote for his own creation
        if ($element->isLastContributorEqualsTo($this->user, $userEmail)) {
            return 'Voyons voyons, vous ne comptiez quand même pas voter pour votre propre contribution si ? Laissez-en un peu pour les autres !</br>
                        Attention les petits malins, si vous utilisez une autre de vos adresse perso on le verra aussi ! ';
        }

        $hasAlreadyVoted = false;

        if ($this->confService->isUserAllowed('directModeration')) {
            $procedureCompleteMessage = $this->handleVoteProcedureComplete($element, ValidationType::Admin, $voteValue >= 1, $comment);
        } else {
            // CHECK USER HASN'T ALREADY VOTED
            $currentVotes = $element->getVotes();
            // if user is anonymous no need to check
            if ($userEmail || $this->user) {
                foreach ($currentVotes as $oldVote) {
                    if ($oldVote->isMadeBy($this->user, $userEmail)) {
                        $hasAlreadyVoted = true;
                        $vote = $oldVote;
                    }
                }
            }

            if (!$hasAlreadyVoted) {
                $vote = new UserInteractionVote();
            }

            $vote->setValue($voteValue);
            $vote->setElement($element);
            $vote->updateUserInformation($this->securityContext, $userEmail);
            if ($comment) {
                $vote->setComment($comment);
            }

            if (!$hasAlreadyVoted) {
                $element->getCurrContribution()->addVote($vote);
            }

            $procedureCompleteMessage = $this->checkVotes($element);
        }

        $element->updateTimestamp();

        $this->dm->persist($element);
        $this->dm->flush();

        $resultMessage = $hasAlreadyVoted ? 'Merci '.$this->user.' : votre vote a bien été modifié !' : 'Merci de votre contribution !';
        if ($procedureCompleteMessage) {
            $resultMessage .= '</br>'.$procedureCompleteMessage;
        }

        return $resultMessage;
    }

    /*
    * Check vote on PENDING Element
    * Differents conditions :
    *   - Enough votes to change status
    *   - Not too much opposites votes
    *   - Waiting for minimum days after contribution to validate or invalidate
    *
    * If an element is pending for too long, it's set in Moderation
    *
    * This action is called when user vote, and with a CRON job every days
    */
    public function checkVotes($element)
    {
        if (!$element->getCurrContribution()) {
            return;
        }

        $currentVotes = $element->getVotes();
        $nbrePositiveVote = 0;
        $nbreNegativeVote = 0;

        $diffDate = time() - $element->getCurrContribution()->getCreatedAt()->getTimestamp();
        $daysFromContribution = floor($diffDate / (60 * 60 * 24));

        foreach ($currentVotes as $key => $vote) {
            $vote->getValue() >= 0 ? $nbrePositiveVote++ : $nbreNegativeVote++;
        }

        $enoughDays = $daysFromContribution >= $this->confService->getConfig()->getMinDayBetweenContributionAndCollaborativeValidation();
        $maxOppositeVoteTolerated = $this->confService->getConfig()->getMaxOppositeVoteTolerated();
        $minVotesToChangeStatus = $this->confService->getConfig()->getMinVoteToChangeStatus();
        $minVotesToForceChangeStatus = $this->confService->getConfig()->getMinVoteToForceChangeStatus();

        if ($nbrePositiveVote >= $minVotesToChangeStatus) {
            if ($nbreNegativeVote <= $maxOppositeVoteTolerated) {
                if ($enoughDays || $nbrePositiveVote >= $minVotesToForceChangeStatus) {
                    return $this->handleVoteProcedureComplete($element, ValidationType::Collaborative, true);
                }
            } else {
                $element->setModerationState(ModerationState::VotesConflicts);
            }
        } elseif ($nbreNegativeVote >= $minVotesToChangeStatus) {
            if ($nbrePositiveVote <= $maxOppositeVoteTolerated) {
                if ($enoughDays || $nbreNegativeVote >= $minVotesToForceChangeStatus) {
                    return $this->handleVoteProcedureComplete($element, ValidationType::Collaborative, false);
                }
            } else {
                $element->setModerationState(ModerationState::VotesConflicts);
            }
        } elseif ($daysFromContribution > $this->confService->getConfig()->getMaxDaysLeavingAnElementPending()) {
            $element->setModerationState(ModerationState::PendingForTooLong);
        }
    }

    private function handleVoteProcedureComplete($element, $voteType, $positiveVote, $customMessage = '')
    {
        // in case of procedure complete directly after a userInteraction, we send a message back to the user
        $flashMessage = '';
        $elDisplayName = $this->confService->getConfig()->getElementDisplayNameDefinite();

        if (ElementStatus::PendingAdd == $element->getStatus()) {
            if (ValidationType::Collaborative == $voteType) {
                $flashMessage = $positiveVote ? 'Félicitations, '.$elDisplayName.' a reçu assez de vote pour être validé !'
                                      : ucwords($elDisplayName).' a reçu suffisamment de votes négatifs, il va être supprimé.';
            } elseif (ValidationType::Admin == $voteType) {
                $flashMessage = $positiveVote ? ucwords($elDisplayName).' a bien été validé' : ucwords($elDisplayName).' a bien été refusé';
            }
        } elseif (ElementStatus::PendingModification == $element->getStatus()) {
            if ($positiveVote) {
                $flashMessage = ValidationType::Admin == $voteType ? 'Les modifications ont bien été acceptées' : 'Félicitations, les modifications ont reçues assez de vote pour être validées !';
            } else {
                $flashMessage = ValidationType::Admin == $voteType ? 'Les modifications ont bien été refusées' : 'La proposition de modification a reçu suffisamment de votes négatifs, elle est annulée.';
            }
        }

        // Handle validation or refusal with dedicate service
        $this->elementPendingService->resolve($element, $positiveVote, $voteType, $customMessage);

        return $flashMessage;
    }
}
