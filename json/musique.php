<?php
/**
 * Created by PhpStorm.
 * User: Axel1
 * Date: 23/02/2018
 * Time: 23:04
 */
require_once 'bd.php';

session_start();

$musiques = new stdClass();
// Classe la plus haute en PHP

$musiques->result = true;
$musiques->message = '';
$musiques->liste = array();

if (isset($_POST['id_categorie'])){
    $categorie=$_POST['id_categorie'];

    $sql = 'SELECT * FROM musique WHERE genre LIKE :genre';
    $stmt = $bd->prepare($sql);
    $stmt->execute(array(':genre' => $categorie));

    while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
        $obj = new stdClass();
        $obj->id = $ligne->id;
        $obj->titre = $ligne->titre;
        $obj->artiste = $ligne->artiste;
        $obj->date = $ligne->date;
        $obj->genre = $ligne->genre;
        $obj->note = $ligne->note;

        array_push($musiques->liste, $obj);
    }
}

// Renvoyer les données pour affichage / JSON
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($musiques);