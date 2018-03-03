<?php
/**
 * Created by PhpStorm.
 * User: Axel1
 * Date: 03/03/2018
 * Time: 12:05
 */
require_once 'bd.php';

session_start();
$data = new stdClass();
// Classe la plus haute en PHP

$data->result = true;
$data->message = '';
$data->est_connecte = false;

$name = $_POST['name'];
$firstname = $_POST['firstname'];
$pass = $_POST['pass'];
$mail = $_POST['mail'];


if(empty($_POST['name']) || empty($_POST['firstname']) || empty($_POST['pass']) || empty($_POST['mail'])) {
    $data->est_inscrit = false;
    $data->result = false;
    $data->message = 'Paramètres incorrects';
}
else {
    $sql = 'INSERT INTO `utilisateur`(`nom`, `prenom`, `mail`, `mdp`) VALUES (:nom, :prenom, :mail, :mdp)';
    $stmt = $bd->prepare($sql);
    $stmt->bindValue('name', $name, PDO::PARAM_STR);
    $stmt->bindValue('firstname', $name, PDO::PARAM_STR);
    $stmt->bindValue('pass', $name, PDO::PARAM_STR);
    $stmt->bindValue('mail', $name, PDO::PARAM_STR);
    $stmt->execute();


}


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($data);

echo '<script type="text/javascript" src="js/ihm.js"></script>';