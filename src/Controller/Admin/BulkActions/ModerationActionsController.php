<?php

namespace App\Controller\Admin\BulkActions;

use App\Services\ElementActionService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ModerationActionsController extends BulkActionsAbstractController
{
    public function deleteElementReportedAsNoMoreExistingAction(Request $request, SessionInterface $session,
                                                               DocumentManager $dm,
                                                               ElementActionService $actionService)
    {
        $repo = $dm->getRepository('App\Document\Element');
        $elements = $repo->findModerationNeeded(false, 1);

        $i = 0;
        $count = 0;
        foreach ($elements as $key => $element) {
            $unresolvedReports = $element->getUnresolvedReports();
            $noExistReports = array_filter($unresolvedReports, function ($r) { return 0 == $r->getValue(); });
            if (count($noExistReports) > 0 && count($noExistReports) == count($unresolvedReports)) {
                $actionService->delete($element);
                ++$count;
            }
            if (0 == (++$i % 100)) {
                $dm->flush();
                $dm->clear();
            }
        }

        $dm->flush();
        $dm->clear();

        $session->getFlashBag()->add('success', $count.' éléments ont été supprimés');

        return $this->redirectToIndex();
    }
}
