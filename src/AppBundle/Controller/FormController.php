<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class FormController extends Controller
{
    public function indexAction()
    {
        return $this->render('AppBundle:Form:form.html.twig', []);
    }

}
