<?php

namespace App\Controller\Admin;

use App\Document\ImportState;
use App\Services\AsyncService;
use App\Services\ElementImportService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Sonata\AdminBundle\Controller\CRUDController as Controller;
use Symfony\Component\HttpFoundation\Request;

class ImportAdminController extends Controller
{
    public function collectAction(ElementImportService $importService)
    {
        $object = $this->admin->getSubject();
        $result = $importService->collectData($object);

        $showUrl = $this->admin->generateUrl('showData', ['id' => $object->getId()]);

        if (count($object->getOntologyMapping()) <= 1) {
            $this->addFlash('sonata_flash_error', "Un problème semble avoir lieu pendant la lecture des données. Si c'est un <b>fichier CSV</b>, vérifiez que les colonnes sont bien <b>séparées avec des virgules</b> (et non pas avec des point virgules ou des espaces) : <a href='https://help.libreoffice.org/Calc/Importing_and_Exporting_CSV_Files/fr'>Cliquez ici pour savoir comment faire</a>. Vérifiez aussi que <b>l'encodage soit en UTF-8</b>. Si c'est un <b>fichier JSON</b>, vérifiez que le <b>tableau de donnée soit bien à la racine du document</b>. Si ce n'est pas le cas, utilisez l'onglet 'Modifier les données en exécutant du code'");
        } elseif (!in_array('name', array_values($object->getOntologyMapping()))) {
            $this->addFlash('sonata_flash_info', 'Merci de remplir le tableau de correspondance des champs. Renseignez au moins le Titre de la fiche');
        } elseif (count($result) > 0) {
            $this->addFlash('sonata_flash_success', 'Les données ont été chargées avec succès.</br>Voici le résultat obtenu pour le premier élément à importer :<pre>'.print_r(reset($result), true).'</pre>'."<a href='$showUrl'>Voir toutes les données</a>");
        } else {
            $this->addFlash('sonata_flash_error', 'Erreur pendant le chargement des données, le résultat est vide');
        }
        $url = $this->admin->generateUrl('edit', ['id' => $object->getId()]);

        return $this->redirect($url);
    }

    public function showDataAction(ElementImportService $importService)
    {
        $object = $this->admin->getSubject();
        $result = $importService->collectData($object);

        $dataDisplay = print_r($result, true);
        $url = $this->admin->generateUrl('edit', ['id' => $object->getId()]);

        return $this->render('admin/pages/import/show-data.html.twig', [
      'dataDisplay' => $dataDisplay,
      'redirectUrl' => $url,
      'import' => $object,
    ]);
    }

    public function refreshAction(Request $request, DocumentManager $dm, ElementImportService $importService,
                                AsyncService $asyncService)
    {
        $object = $this->admin->getSubject();

        if (!in_array('name', array_values($object->getOntologyMapping()))) {
            $this->addFlash('sonata_flash_error', "Avant d'importer les données, vous devez d'abords remplir le tableau de correspondance des champs. Renseignez au moins le Titre de la fiche");
            $url = $this->admin->generateUrl('edit', ['id' => $object->getId()]);

            return $this->redirect($url);
        }

        $object->setCurrState(ImportState::Started);
        $object->setCurrMessage('En attente...');
        $dm->persist($object);
        $dm->flush();

        if ($request->get('direct')) {
            $result = $importService->startImport($object);
        } else {
            $asyncService->callCommand('app:elements:importSource', [$object->getId()]);
        }

        $redirectionUrl = $this->admin->generateUrl('edit', ['id' => $object->getId()]);
        $stateUrl = $this->generateUrl('gogo_import_state', ['id' => $object->getId()]);

        return $this->render('admin/pages/import/import-progress.html.twig', [
      'import' => $object,
      'redirectUrl' => $redirectionUrl,
      'redirectListUrl' => $redirectionUrl = $this->admin->generateUrl('list'),
      'stateUrl' => $stateUrl,
    ]);
    }

    /**
     * Overite Sonata CRud Controller.
     */
    public function editAction($id = null)
    {
        $request = $this->getRequest();
        $id = $request->get($this->admin->getIdParameter());
        $object = $this->admin->getObject($id);

        if (!$object) {
            throw $this->createNotFoundException(sprintf('unable to find the object with id : %s', $id));
        }
        $this->admin->checkAccess('edit', $object);
        $this->admin->setSubject($object);

        $form = $this->admin->getForm();
        $form->setData($object);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            //TODO: remove this check for 4.0
            if (method_exists($this->admin, 'preValidate')) {
                $this->admin->preValidate($object);
            }
            $isFormValid = $form->isValid();

            // persist if the form was valid and if in preview mode the preview was approved
            if ($isFormValid) {
                try {
                    // ----- CUSTOM -------
                    $object->setOntologyMapping($request->get('ontology'));
                    if ($request->get('taxonomy')) {
                        $taxonomy = array_map(function ($value) {
                            $array = explode(',', $value[0]);

                            return array_filter($array, function ($el) { return '/' != $el; });
                        }, $request->get('taxonomy'));
                    } else {
                        $taxonomy = null;
                    }

                    $object->setTaxonomyMapping($taxonomy);
                    $object->setNewOntologyToMap(false);
                    $object->setNewTaxonomyToMap(false);

                    // ---- END CUSTOM ------

                    $object = $this->admin->update($object);

                    $this->addFlash(
            'sonata_flash_success',
            $this->trans(
              'flash_edit_success',
              ['%name%' => $this->escapeHtml($this->admin->toString($object))],
              'SonataAdminBundle'
            )
          );

                    if ($request->get('collect')) {
                        $url = $this->admin->generateUrl('collect', ['id' => $object->getId()]);
                    } elseif ($request->get('import')) {
                        $url = $this->admin->generateUrl('refresh', ['id' => $object->getId()]);
                    } else {
                        $url = $this->admin->generateUrl('edit', ['id' => $object->getId()]);
                    }

                    return $this->redirect($url);
                } catch (ModelManagerException $e) {
                    $this->handleModelManagerException($e);
                    $isFormValid = false;
                } catch (LockException $e) {
                    $this->addFlash('sonata_flash_error', $this->trans('flash_lock_error', [
            '%name%' => $this->escapeHtml($this->admin->toString($object)),
            '%link_start%' => '<a href="'.$this->admin->generateObjectUrl('edit', $object).'">',
            '%link_end%' => '</a>',
          ], 'SonataAdminBundle'));
                }
            }

            // show an error message if the form failed validation
            if (!$isFormValid) {
                if (!$this->isXmlHttpRequest()) {
                    $this->addFlash(
            'sonata_flash_error',
            $this->trans(
              'flash_edit_error',
              ['%name%' => $this->escapeHtml($this->admin->toString($object))],
              'SonataAdminBundle'
            )
          );
                }
            }
        }

        $view = $form->createView();
        // set the theme for the current Admin Form
        $this->get('twig')->getRuntime(\Symfony\Component\Form\FormRenderer::class)
             ->setTheme($view, $this->admin->getFormTheme());

        return $this->render($this->admin->getTemplate('edit'), [
      'action' => 'edit',
      'form' => $view,
      'object' => $object,
    ], null);
    }

    /**
     * Overwrite Sonata CRud Controller.
     */
    public function createAction()
    {
        $request = $this->getRequest();
        // the key used to lookup the template
        $templateKey = 'edit';
        $this->admin->checkAccess('create');
        $class = new \ReflectionClass($this->admin->hasActiveSubClass() ? $this->admin->getActiveSubClass() : $this->admin->getClass());

        $object = $this->admin->getNewInstance();

        $this->admin->setSubject($object);

        $form = $this->admin->getForm();
        $form->setData($object);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            //TODO: remove this check for 4.0
            if (method_exists($this->admin, 'preValidate')) {
                $this->admin->preValidate($object);
            }
            $isFormValid = $form->isValid();

            // persist if the form was valid and if in preview mode the preview was approved
            if ($isFormValid && (!$this->isInPreviewMode($request) || $this->isPreviewApproved($request))) {
                try {
                    $object = $this->admin->create($object);
                    // CUSTOM
                    $url = $this->admin->generateUrl('collect', ['id' => $object->getId()]);

                    return $this->redirect($url);
                } catch (ModelManagerException $e) {
                    $this->handleModelManagerException($e);
                    $isFormValid = false;
                }
            }

            // show an error message if the form failed validation
            if (!$isFormValid) {
                if (!$this->isXmlHttpRequest()) {
                    $this->addFlash(
                      'sonata_flash_error',
                      $this->trans(
                          'flash_create_error',
                          ['%name%' => $this->escapeHtml($this->admin->toString($object))],
                          'SonataAdminBundle'
                      )
                  );
                }
            } elseif ($this->isPreviewRequested()) {
                // pick the preview template if the form was valid and preview was requested
                $templateKey = 'preview';
                $this->admin->getShow();
            }
        }

        $view = $form->createView();

        // set the theme for the current Admin Form
        $this->get('twig')->getRuntime(\Symfony\Component\Form\FormRenderer::class)
             ->setTheme($view, $this->admin->getFormTheme());

        return $this->render($this->admin->getTemplate($templateKey), [
          'action' => 'create',
          'form' => $view,
          'object' => $object,
      ], null);
    }
}
