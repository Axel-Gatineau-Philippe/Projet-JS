<?php
/**
 * Created by PhpStorm.
 * User: g16006159
 * Date: 20/02/18
 * Time: 13:54
 */
session_start();

$data = new stdClass();
// Classe la plus haute en PHP

$data->result = true;
$data->message = '';
$data->est_connecte = false;

if (isset($_SESSION['id'])) {
    $data->est_connecte = true;
    $data->message = 'Connecté';
}else {
    $data->message = 'Pas connecté';
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($data);

