<?php

namespace Biopen\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;


class MailTestController extends Controller
{
   public function draftAutomatedAction(Request $request, $mailType)
   {
     $mailService = $this->container->get('biopen.mail_service');
     $draftResponse = $this->draftTest($mailType);

     if ($draftResponse == null) return new Response('No visible elements in database, please create an element');

     if ($draftResponse['success'])
     {
         $mailContent = $mailService->draftTemplate($draftResponse['content']);
         return $this->render('@BiopenCoreBundle/emails/test-emails.html.twig', array('subject' => $draftResponse['subject'], 'content' => $mailContent, 'mailType' => $mailType));
     }
     else
     {
        $request->getSession()->getFlashBag()->add('error', 'Error : ' . $draftResponse['message']);
        return $this->redirect($this->generateUrl('sonata_admin_dashboard'));    
     }   
     
   }

   public function sentTestAutomatedAction(Request $request, $mailType)
   {
    $mail = $request->get('email');

    if (!$mail) return new Response('Aucune adresse mail n\'a été renseignée');
    $mailService = $this->container->get('biopen.mail_service');

    $draftResponse = $this->draftTest($mailType);

    if ($draftResponse == null) return new Response('No visible elements in database, please create an element');

    if ($draftResponse['success'])
    {
       $mailContent = $mailService->sendMail($mail,$draftResponse['subject'], $draftResponse['content']); 
       $request->getSession()->getFlashBag()->add('success', 'Le mail a bien été envoyé à ' . $mail . '</br>Si vous ne le voyez pas vérifiez dans vos SPAMs');
    }
    else 
    {
       $request->getSession()->getFlashBag()->add('error', 'Error : ' . $draftResponse['message']);
    }

    return $this->render('@BiopenCoreBundle/emails/test-emails.html.twig', array('subject' => $draftResponse['subject'], 'content' => $mailContent, 'mailType' => $mailType));
    
   }

   private function draftTest($mailType)
   {
     $em = $this->get('doctrine_mongodb')->getManager();     
     $element = $em->getRepository('BiopenGeoDirectoryBundle:Element')->findVisibles()->getSingleResult();

     if (!$element) return null;

     $mailService = $this->container->get('biopen.mail_service');
     $draftResponse = $mailService->draftEmail($mailType, $element, "Un customMessage de test");
     return $draftResponse;
   }
}