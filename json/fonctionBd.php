<?php
/**
 * Created by PhpStorm.
 * User: Axel1
 * Date: 03/03/2018
 * Time: 19:13
 */

require_once 'bd.php';

class fonctionBd {
    public static function mailExistant($mail)
    {
        $bd = new Bd();
        $sql = 'SELECT numeroUtilisateur FROM utilisateur WHERE Mail LIKE :mail';
        $stmt = $bd->prepare($sql);
        if ($stmt->execute(array(':mail' => $mail)) && $row = $stmt->fetch())
        {
            return true;
        }
        return false;
    }

    public static function connecterUtilisateur($mail,$mdp)
    {
        $bd = new Bd();
        $sql = 'SELECT numeroUtilisateur, mdp FROM utilisateur WHERE mail LIKE :mail';
        $stmt = $bd->prepare($sql);
        if ($stmt->execute(array(':mail' => $mail)) && $resultat = $stmt->fetch())
        {
            if (password_verify($mdp, $resultat['mdp']))
            {
                return true;
            }
            else
            {
                return false;
            }
        } else {
            return false;
        }
    }
}