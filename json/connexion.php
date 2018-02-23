<?php
/**
 * Created by PhpStorm.
 * User: g16006159
 * Date: 20/02/18
 * Time: 13:53
 */

session_start();
// Utilisation de $_SESSION[]

$resultat = new stdClass();
// Classe la plus haute en PHP

$resultat->result = true;
$resultat->message = '';
$resultat->est_connecte = false;

if (isset($_POST['username']) && isset($_POST['pass'])) {
    $username = $_POST['username'];
    $pass     = $_POST['pass'];

    if ($username === 'user' && $pass === 'pass') {
        $resultat->est_connecte = true;
        $_SESSION['id'] = '123';
    }
    else {
        $resultat->est_connecte = false;
    }
}
else {
    $resultat->result = false;
    $resultat->message = 'Paramètres incorrects';
}

// Renvoyer les données pour affichage / JSON
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($resultat);