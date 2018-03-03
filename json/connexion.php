<?php
/**
 * Created by PhpStorm.
 * User: g16006159
 * Date: 20/02/18
 * Time: 13:53
 */

session_start();
// Utilisation de $_SESSION[]

$data = new stdClass();
// Classe la plus haute en PHP

$data->result = true;
$data->message = '';
$data->est_connecte = false;

if (isset($_POST['username']) && isset($_POST['pass'])) {
    $username = $_POST['username'];
    $pass     = $_POST['pass'];

    if ($username === 'user' && $pass === 'pass') {
        $data->est_connecte = true;
        $_SESSION['id'] = '123';
    }
    else {
        $data->est_connecte = false;
    }
}
else {
    $data->result = false;
    $data->message = 'Paramètres incorrects';
}

// Renvoyer les données pour affichage / JSON
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($data);