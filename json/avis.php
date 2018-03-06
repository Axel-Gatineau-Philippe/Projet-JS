<?php
/**
 * Created by PhpStorm.
 * User: Axel1
 * Date: 06/03/2018
 * Time: 18:57
 */
require_once 'bd.php';

session_start();

$avis = new stdClass();
// Classe la plus haute en PHP

$avis->result = true;
$avis->message = '';
$avis->liste = array();

if (isset($_POST['avisText']) && isset($_POST['categorieChoisi'])){
    $avisText = $_POST['avisText'];
    $categorieChoisi = $_POST['categorieChoisi'];

    $sql = '';
    $stmt = $bd->prepare($sql);
    $stmt->execute(array(':genre' => $categorie));

}

// Renvoyer les données pour affichage / JSON
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($avis);