<?php

namespace AppBundle\Entity\User;

use FOS\UserBundle\Entity\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 */
class User extends BaseUser
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @ORM\Id
     * @ORM\Column(type="guid")
     * @ORM\GeneratedValue(strategy="UUID")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", name="firstname", length=64, nullable=true)
     */
    protected $firstname;

    /**
     * @ORM\Column(type="string", name="lastname", length=64, nullable=true)
     */
    protected $lastname;

    public function setFirstName($firstname)
    {
        $this->firstname = $firstname;
        return $this;
    }

    public function getFirstName()
    {
        return $this->firstname;
    }

    public function setLastName($lastname)
    {
        $this->lastname = $lastname;
        return $this;
    }

    public function getLastName()
    {
        return $this->lastname;
    }
    
}
