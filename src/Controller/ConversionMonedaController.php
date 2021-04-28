<?php

namespace App\Controller;

use App\Repository\CurrencyConvertHistoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ConversionMonedaController extends AbstractController
{
    public function __construct(CurrencyConvertHistoryRepository $cch)
    {
        $this->repository = $cch;
    }

    /**
     * @Route("/conversion/moneda", name="conversion_moneda")
     */
    public function index(): Response
    {
        return $this->render('conversion_moneda/index.html.twig', [
            'controller_name' => 'ConversionMonedaController',
        ]);
    }

    /**
     * @Route("/api/currency", name="currency")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getCurrency(Request $request)
    {
        $getData    = $request->query->all();
        $base       = isset($getData["base"]) ? $getData["base"] : "";
        $convert    = isset($getData["convert"]) ? $getData["convert"] : "";

        $currency = [
            "MXN" => "123",
            "ERN" => "456",
            "DZD" => "789",
            "CDF" => "012",
            "MAD" => "345",
            "SYP" => "678",
        ];

        $data = [
            $base."_".$convert => isset($currency[$convert]) ? $currency[$convert] : 0
        ];

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($data));

        return $response;
    }
    /**
     * @Route("/conversion/moneda/save", methods={"POST"}, name="conversion_moneda_save")
     */
    public function saveHistory(Request $request)
    {
        $getData = json_decode($request->getContent(), true);

        $store = $this->repository->store($getData["amount"], $getData["fromCurrency"], $getData["toCurrency"]);

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($store));

        return $response;
    }

    /**
     * @Route("/conversion/moneda/history", name="conversion_moneda_history")
     */
    public function getHistory(){
        $response   = new Response();
        $rows       = [];

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $data = $this->repository->findAll();

        foreach($data as $row){
            $rows[] = [
                "id" => $row->getId(),
                "amount" => $row->getAmount(),
                "fromCurrency" => $row->getFromCurrency(),
                "toCurrency" => $row->getToCurrency(),
                "createdAt" => $row->getCreatedAt()->format("d-m-Y H:i:s")
            ];
        }

        $response->setContent(json_encode($rows));

        return $response;
    }
}
