<?php

namespace AppBundle\Entity\Ticket;

use Doctrine\ORM\EntityManager;

class TicketManager
{
    protected $em;

    protected $class;

    public function __construct(EntityManager $em, $class)
    {
        $this->em    = $em;
        $this->class = $class;
    }
}
