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
$data->est_inscrit = false;


if(isset($_POST['nom']) || isset($_POST['prenom']) || isset($_POST['pass']) || isset($_POST['mail'])) {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $pass = md5($_POST['pass']);
    $mail = $_POST['mail'];

    if(fonctionBd::mailExistant($mail) == true){
        $data->est_inscrit = false;
        $data->result = false;
        $data->message = 'Utilisateur exsitant';
    }
    else {
        $sql = 'INSERT INTO utilisateur(nom, prenom, mail, mdp) VALUES (:Nom, :Prenom, :Mail, :Pass)';
        $stmt = $bd->prepare($sql);
        $stmt->bindValue('Nom', $nom, PDO::PARAM_STR);
        $stmt->bindValue('Prenom', $prenom, PDO::PARAM_STR);
        $stmt->bindValue('Mail', $mail, PDO::PARAM_STR);
        $stmt->bindValue('Pass', $pass, PDO::PARAM_STR);
        $stmt->execute();

        $data->est_inscrit = true;

        //Faire fonction qui confirme l'inscription avec envoi de mail + les messages qui s'affichent.
    }

}
else {

    $data->est_inscrit = false;
    $data->result = false;
    $data->message = 'Paramètres incorrects';

}


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($data);

echo '<script type="text/javascript" src="js/ihm.js"></script>';