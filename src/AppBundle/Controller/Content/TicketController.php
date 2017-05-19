<?php

namespace AppBundle\Controller\Content;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use AppBundle\Entity\Content\Ticket;

class TicketController extends Controller
{
    public function listAction()
    {
        $ticket = new Ticket();
        dump($ticket);die();
        return $this->render('AppBundle:Dashboard/Content/Ticket:list.html.twig', $ticket->findAll());
    }
}
