<?php
session_start();

$data = new stdClass();
// Classe la plus haute en PHP

$data->result = true;
$data->message = '';
$data->est_inscrit = false;

if (isset($_SESSION['id'])) {
    $data->est_inscrit = true;
    $data->message = 'Inscrit';
}else {
    $data->message = 'Non inscrit';
}

// Renvoyer les données pour affichage / JSON

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($data);

