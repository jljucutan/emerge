<?php

namespace AppBundle\Entity\Content;

use Doctrine\ORM\Mapping as ORM;

/**
 * Eform
 *
 * @ORM\Table(name="content_eform")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Content\EformRepository")
 */
class Eform
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="guid")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="UUID")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text", nullable=true)
     */
    private $content;

    /**
     * @var string
     *
     * @ORM\Column(name="content_raw", type="text", nullable=true)
     */
    private $contentRaw;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title
     *
     * @param string $title
     * @return Eform
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string 
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set content
     *
     * @param string $content
     * @return Eform
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string 
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set contentRaw
     *
     * @param string $contentRaw
     * @return Eform
     */
    public function setContentRaw($contentRaw)
    {
        $this->contentRaw = $contentRaw;

        return $this;
    }

    /**
     * Get contentRaw
     *
     * @return string 
     */
    public function getContentRaw()
    {
        return $this->contentRaw;
    }
}
