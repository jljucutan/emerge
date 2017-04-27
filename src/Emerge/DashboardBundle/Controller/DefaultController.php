<?php

namespace Emerge\DashboardBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('EmergeDashboardBundle:Default:index.html.twig');
    }
}
