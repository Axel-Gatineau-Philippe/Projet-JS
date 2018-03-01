<?php

class Bd extends PDO {
    public function __construct() {
        $dsn = 'mysql:dbname=projetjavascropt_projet;host=mysql-projetjavascropt.alwaysdata.net';
        $user = '153747';
        $pw = 'calacuccia2b';
        try {
            parent::__construct($dsn, $user, $pw);
            $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();;
        }
    }
}
$bd = new Bd();