<?php

class Bd extends PDO {
    public function __construct() {
        $dsn = 'mysql:dbname=projetjsaxel_projet; host=mysql-projetjsaxel.alwaysdata.net';
        $user = '154109';
        $pw = 'axelprojet';
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