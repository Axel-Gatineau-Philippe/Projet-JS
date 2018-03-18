<?php
/**
 * Created by PhpStorm.
 * User: Axel1
 * Date: 03/03/2018
 * Time: 12:05
 */
require_once 'bd.php';
require_once 'fonctionBd.php';

session_start();
$data = new stdClass();

$data->result = true;
$data->message = '';


if(empty($_POST['nom']) || empty($_POST['prenom']) || empty($_POST['pass']) || empty($_POST['mail'])) {
    $data->result = false;
    $data->message = 'Paramètres incorrects';
}
else {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $pass = md5($_POST['pass']);
    $mail = $_POST['mail'];

    if(fonctionBd::mailExistant($mail) == true){
        $data->result = false;
        $data->message = 'Utilisateur existant';
    }
    else {
        $sql = 'INSERT INTO utilisateur(nom, prenom, mail, mdp) VALUES (:Nom, :Prenom, :Mail, :Pass)';
        $stmt = $bd->prepare($sql);
        $stmt->bindValue('Nom', $nom, PDO::PARAM_STR);
        $stmt->bindValue('Prenom', $prenom, PDO::PARAM_STR);
        $stmt->bindValue('Mail', $mail, PDO::PARAM_STR);
        $stmt->bindValue('Pass', $pass, PDO::PARAM_STR);

        $data->result = true;
        $stmt->execute();

        //Faire fonction qui confirme l'inscription avec envoi de mail + les messages qui s'affichent.
    }

}


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($data);