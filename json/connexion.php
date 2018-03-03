<?php
/**
 * Created by PhpStorm.
 * User: g16006159
 * Date: 20/02/18
 * Time: 13:53
 */

require_once 'fonctionBd.php';

session_start();
// Utilisation de $_SESSION[]

$data = new stdClass();
// Classe la plus haute en PHP

$data->result = true;
$data->message = '';
$data->est_connecte = false;

/*if (isset($_POST['username']) && isset($_POST['pass'])) {
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];

    if (fonctionBd::connecterUtilisateur($mail, $pass) == true) {
        $data->est_connecte = true;
        $_SESSION['1'] = '1';
    }
    else {
        $data->est_connecte = false;
    }
}
else {
    $data->result = false;
    $data->message = 'Paramètres incorrects';
}*/
if (isset($_POST['username']) && isset($_POST['pass'])) {
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    $resultat = fonctionBd::connecterUtilisateur($mail, $pass);
    session_start();
    $_SESSION['NumeroUtilisateur'] = $resultat['numeroUtilisateur'];
    $_SESSION['Nom'] = $resultat['nom'];
    $_SESSION['Prenom'] = $resultat['prenom'];
    $_SESSION['Mail'] = $resultat['mail'];
    $_SESSION['Mdp'] = $resultat['mdp'];

    $data->est_connecte = true;
    $_SESSION['1'] = '1';
}
else {
    $data->est_connecte = false;
    $data->result = false;
    $data->message = 'Paramètres incorrects';
}

// Renvoyer les données pour affichage / JSON
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($data);