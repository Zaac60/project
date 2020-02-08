<?php
/**
 * @Author: Sebastian Castro
 * @Date:   2017-03-28 15:29:03
 * @Last Modified by:   Sebastian Castro
 * @Last Modified time: 2018-04-22 19:45:15
 */

namespace App\Admin;

use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelType;

class ConfigurationAdmin extends ConfigurationAbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $imagesOptions = [
            'class' => 'App\Document\ConfImage',
            'placeholder' => 'Séléctionnez une image déjà importée, ou ajoutez en une !',
            'required' => false,
            'label' => 'Logo',
            'mapped' => true,
        ];

        $featureStyle = ['class' => 'col-md-6 col-lg-3'];
        $contributionStyle = ['class' => 'col-md-6 col-lg-4'];
        $mailStyle = ['class' => 'col-md-12 col-lg-6'];
        $featureFormOption = ['delete' => false, 'required' => false, 'label_attr' => ['style' => 'display:none']];
        $featureFormTypeOption = ['edit' => 'inline'];

        $dm = $this->getModelManager()->getDocumentManager('App\Document\Configuration');
        $apiProperties = $dm->getRepository('App\Document\Element')->findAllCustomProperties();

        $formMapper
            ->with('Le site', ['class' => 'col-md-6', 'description' => '<div class="iframe-container"><iframe height="110" sandbox="allow-same-origin allow-scripts" src="https://video.colibris-outilslibres.org/videos/embed/fc7d3784-7bd1-4f3a-b915-ab6daefdd52d" frameborder="0" allowfullscreen></iframe></div>'])
                ->add('appName', null, ['label' => 'Nom du site'])
                ->add('appNameShort', null, ['label' => 'Nom Court (utilisé par les téléphones, 12 caractères max.)', 'required' => false])
                ->add('appBaseline', null, ['label' => 'Description du site (baseline)', 'required' => false])
                ->add('appTags', null, ['label' => 'Mot clés pour le référencement (séparés par une virgule)', 'required' => false])
                ->add('dataLicenseUrl', null, ['label' => 'Url de la licence qui protège vos données', 'required' => false])
            ->end()
            ->with('Images générales', ['class' => 'col-md-6'])
                ->add('logo', ModelType::class, $imagesOptions)
                ->add('logoInline', ModelType::class, array_replace($imagesOptions, ['label' => 'Logo pour la barre de menu']))
                ->add('socialShareImage', ModelType::class, array_replace($imagesOptions, ['label' => "Image à afficher lors d'un partage sur les réseaux sociaux"]))
                ->add('favicon', ModelType::class, array_replace($imagesOptions, ['label' => 'Favicon']))
            ->end()
            ->with('Fonctions principales', ['class' => 'col-md-6'])
                ->add('activateHomePage', null, ['label' => "Activer la page d'accueil", 'required' => false])
                ->add('activatePartnersPage', null, ['label' => 'Activer la page type "Partenaires"', 'required' => false])
                ->add('partnerPageTitle', null, ['label' => 'Titre de la page "Partenaires"', 'required' => false])
                ->add('activateAbouts', null, ['label' => 'Activer les popups type "A propos"', 'required' => false])
                ->add('aboutHeaderTitle', null, ['label' => 'Titre de la section "A propos"', 'required' => false])
            ->end()
            ->with('Nom des entités référencées sur l\'annuaire', ['class' => 'col-md-6'])
                ->add('elementDisplayName', null, ['label' => 'Nom'])
                ->add('elementDisplayNameDefinite', null, ['label' => 'Nom avec article défini'])
                ->add('elementDisplayNameIndefinite', null, ['label' => 'Nom avec article indéfini'])
                ->add('elementDisplayNamePlural', null, ['label' => 'Nom pluriel '])
            ->end()
        ;
    }
}
