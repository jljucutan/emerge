<?php

namespace AppBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class FormControllerControllerTest extends WebTestCase
{
    public function testGeform()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/geForm');
    }

}
