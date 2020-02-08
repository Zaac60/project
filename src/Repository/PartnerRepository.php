<?php

namespace App\Repository;

use Doctrine\ODM\MongoDB\DocumentRepository;

/**
 * PartnerRepository.
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class PartnerRepository extends DocumentRepository
{
    public function findAllOrderedByPosition()
    {
        return $this->createQueryBuilder()
          ->sort('position', 'ASC')
          ->getQuery()
          ->execute();
    }
}
