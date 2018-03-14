<?php
/**
 * Created by PhpStorm.
 * User: Axel1
 * Date: 14/03/2018
 * Time: 11:42
 */
require_once 'bd.php';

session_start();

$avis = new stdClass();
// Classe la plus haute en PHP

$avis->result = true;
$avis->message = '';


if (isset($_POST['']) && isset($_POST['']) && isset($_POST['note'])){
    $avisText = $_POST['avisText'];
    $categorieChoisi = $_POST['categorieChoisi'];
    $note = $_POST['note'];


    $sql = 'UPDATE musique SET avis = :avisText, note = :note WHERE genre = :categorieChoisi';
    $stmt = $bd->prepare($sql);
    $stmt->bindValue('avisText', $avisText, PDO::PARAM_STR);
    $stmt->bindValue('categorieChoisi', $categorieChoisi, PDO::PARAM_STR);
    $stmt->bindValue('note', $note, PDO::PARAM_STR);

    $stmt->execute();
}

// Renvoyer les données pour affichage / JSON
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($avis);