<?php
/**
 * Created by PhpStorm.
 * User: g16006159
 * Date: 20/02/18
 * Time: 13:53
 */

session_start();

$data = new stdClass();

$data->result = true;
$data->message = '';
$data->est_connecte = false;

$_SESSION[] = array();

if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

session_destroy();

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($data);