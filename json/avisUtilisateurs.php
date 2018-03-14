<?php
/**
 * Created by PhpStorm.
 * User: Axel1
 * Date: 14/03/2018
 * Time: 10:37
 */

session_start();

$avisUtil = new stdClass();
// Classe la plus haute en PHP

$avisUtil->result = true;
$avisUtil->message = '';


if (isset($_POST['mail']) && isset($_POST['avisUtil'])){
    $mail = $_POST['mail'];
    $message = $_POST['avisUtilisateur'];


    mail('axel13310.p@gmail.com', 'Avis utilisateur', $message, $mail);
}

// Renvoyer les données pour affichage / JSON
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($avisUtil);