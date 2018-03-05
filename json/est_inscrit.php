<?php
/**
 * Created by PhpStorm.
 * User: Axel1
 * Date: 03/03/2018
 * Time: 12:06
 */
session_start();

$data = new stdClass();

$data->result = true;
$data->message = '';
$data->est_inscrit = false;

if (isset($_SESSION['id'])) {
    $data->est_inscrit = true;
    $data->message = 'Inscrit';
}else {
    $data->message = 'Non inscrit';
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($data);

