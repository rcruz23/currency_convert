<?php

namespace App\Repository;

use App\Entity\CurrencyConvertHistory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CurrencyConvertHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method CurrencyConvertHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method CurrencyConvertHistory[]    findAll()
 * @method CurrencyConvertHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CurrencyConvertHistoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CurrencyConvertHistory::class);
        $this->em = $this->getEntityManager();
    }

    public function store($amount, $from_currency, $to_currency){
        $result = ["success" => false];
        try{
            $this->em->beginTransaction();

            $register = new CurrencyConvertHistory();
            $register->setAmount($amount);
            $register->setFromCurrency($from_currency);
            $register->setToCurrency($to_currency);
            $register->setCreatedAt(new \DateTime());

            $this->em->persist($register);
            $this->em->flush();
            $this->em->getConnection()->commit();

            $result["success"] = true;
        }catch(\Exception $e){
            $this->em->getConnection()->rollback();
            $result["message"] = $e->getMessage();
        }

        return $result;
    }
}
