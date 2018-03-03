<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="manifest" href="site.webmanifest">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<!-- Add your site or application content here -->
<nav>

</nav>

<h1 id="titre1">Bienvenue sur e-Rated Music</h1><br/>

<p id="presentation">e-Rated Music propose à ses utilisateurs de noter les dernières sortie que musiques par type sur cinq étoiles,
    avec la possibilité de laisser son avis.<br/>
    Bonne visite !</p>

<h3 id="titre-connexion">Authentifiez vous :</h3><br/>

<form style="display:none; text-align: center;" id="form-connexion" method="post" action="json/connexion.php"><br/>
    <input type="text" name="mail" value="eMail" onfocus="this.value=''"/>
    <br/>
    <br/>
    <input type="password" name="pass" value="Mot de passe" onfocus="this.value=''"/>
    <br/>
    <br/>
    <input type="submit" value="Connexion" onclick=""/>
    <br/>

</form>

<br/>

<form style="display:none" class="affichForm">
    <input type="button" value="S'inscrire" />
</form>

<div class="inscription">
    <form id="form-inscription" method="post" action="json/inscription.php">
        <input type="text" name="prenom" value="Prénom" onfocus="this.value=''"/>
        <br/>
        <br/>
        <input type="text" name="nom" value="Nom" onfocus="this.value=''"/>
        <br/>
        <br/>
        <input type="text" name="mail" value="eMail" onfocus="this.value=''"/>
        <br/>
        <br/>
        <input type="password" name="pass" value="Mot de passe" onfocus="this.value=''"/>
        <br/>
        <br/>
        <input type="submit" value="Valider"/>
        <br/>
    </form>
</div>

<br/>

<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="rap">
    <input type="submit" value="Catégorie Rap" />
</form>
<br/>

<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="rock">
    <input type="submit" value="Catégorie Rock" />
</form>

<br/>


<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="reggae">
    <input type="submit" value="Catégorie Reggae" />
</form>

<br/>


<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="jazz">
    <input type="submit" value="Catégorie Jazz" />
</form>

<br/>


<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="hiphop">
    <input type="submit" value="Catégorie HipHop" />
</form>
<br/>


<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="humour">
    <input type="submit" value="Catégorie Humour" />
</form>
<br/>

<div class="musique">

</div>

<br/>


<form id="form-deconnexion" style="display: none;" method="post" action="json/deconnexion.php">
    <input type="submit" value="Se déconnecter" onclick=""/>
</form>





<script src="js/vendor/modernizr-3.5.0.min.js"></script>
<script src="js/vendor/jquery-3.2.1.min.js"></script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>
<script type="text/javascript" src="js/ihm.js"></script>


</body>
</html>