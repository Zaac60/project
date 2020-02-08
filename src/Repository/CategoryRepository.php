<?php

namespace App\Repository;

use Doctrine\ODM\MongoDB\DocumentRepository;

/**
 * CategoryRepository.
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class CategoryRepository extends DocumentRepository
{
    public function findRootCategories()
    {
        $qb = $this->createQueryBuilder('App\Document\Category');
        $qb->field('isRootCategory')->equals(true)->sort('index', 'asc');

        return $qb->getQuery()->execute();
    }
}
