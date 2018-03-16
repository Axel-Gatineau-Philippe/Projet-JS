<?php
/**
 * Created by PhpStorm.
 * User: Axel1
 * Date: 14/03/2018
 * Time: 11:42
 */
require_once 'bd.php';

session_start();

$ajout = new stdClass();
// Classe la plus haute en PHP

$ajout->result = true;
$ajout->message = '';


if(isset($_POST['artiste']) && isset($_POST['titre']) && isset($_POST['genre'])
    && isset($_POST['annee']) && isset($_POST['noteAjout']) && isset($_POST['avisAjout'])){

    $titre = $_POST['titre'];
    $artiste = $_POST['artiste'];
    $genre = $_POST['genre'];
    $annee = $_POST['annee'];
    $noteAjout = $_POST['noteAjout'];
    $avisAjout = $_POST['avisAjout'];
    $pochette = $_POST['pochette'];

    $sql = 'INSERT INTO musique(titre, artiste, genre, annee, note, avis, pochette) VALUES (:titre, :artiste, :genre, :annee, :note, :avis, :pochette)';
    $stmt = $bd->prepare($sql);

    $stmt->bindValue('titre', $titre, PDO::PARAM_STR);
    $stmt->bindValue('artiste',$artiste , PDO::PARAM_STR);
    $stmt->bindValue('genre', $genre, PDO::PARAM_STR);
    $stmt->bindValue('annee', $annee, PDO::PARAM_STR);
    $stmt->bindValue('note', $noteAjout, PDO::PARAM_STR);
    $stmt->bindValue('avis', $avisAjout, PDO::PARAM_STR);
    $stmt->bindValue('pochette', $pochette, PDO::PARAM_STR);


    $stmt->execute();

}


// Renvoyer les données pour affichage / JSON
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($ajout);