<?php
/**
 * Created by PhpStorm.
 * User: Axel1
 * Date: 23/02/2018
 * Time: 23:04
 */
require_once 'bd.php';

session_start();

$resultat = new stdClass();
// Classe la plus haute en PHP

$resultat->result = true;
$resultat->message = '';
$resultat->musiques = array();

if (isset($_POST['id_categorie'])){
    $categorie=$_POST['id_categorie'];

    $sql = 'SELECT * FROM musique WHERE type LIKE :type';
    $stmt = $bd->prepare($sql);
    $stmt->execute(array(':type' => $categorie));

    while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
        $obj = new stdClass();
        $obj->id = $ligne->id;
        $obj->titre = $ligne->titre;
        $obj->artiste = $ligne->artiste;
        $obj->date = $ligne->date;
        $obj->type = $ligne->type;
        $obj->note = $ligne->note;

        array_push($resultat->musiques, $obj);
    }
}

// Renvoyer les données pour affichage / JSON
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($resultat);