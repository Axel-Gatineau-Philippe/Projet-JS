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

<!-- Faire en sorte que le menu soit toujours présent et en haut de la page-->
<nav class="menu">
    <form id="form-deconnexion" style="display: none;" method="post" action="json/deconnexion.php">
        <input type="submit" value="Se déconnecter" onclick=""/>
    </form>

    <form style="display:none" class="affichFormInsc">
        <input type="button" value="S'inscrire" />
    </form>

    <form style="display:none" class="affichFormAvis">
        <input type="button" value="Donnez votre avis !" />
    </form>
</nav>




<h1 style="display: none" id="titre1">Bienvenue sur e-Rated Music</h1><br/>

<p id="presentation">e-Rated Music propose à ses utilisateurs de noter les dernières sortie que musiques par type sur cinq étoiles,
    avec la possibilité de laisser son avis.<br/>
    Bonne visite !</p>

<h3 style="display: none" id="titre-connexion">Authentifiez vous :</h3><br/>

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

<!--<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="rap">
    <input type="submit" class="rapButton" value="" />
</form>
<br/>

<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="rock">
    <input type="submit" class="rockButton" value="" />
</form>

<br/>


<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="reggae">
    <input type="submit" class="reggaeButton" value="" />
</form>

<br/>


<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="jazz">
    <input type="submit" class="jazzButton" value="" />
</form>

<br/>


<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="hiphop">
    <input type="submit" class="hiphopButton" value=""/>
</form>
<br/>


<form style="display:none" class="selection-categorie" method="post" action="json/musique.php">
    <input type="hidden" name="id_categorie" value="humour">
    <input type="submit" class="humourButton" value="" />
</form>
<br/>
-->
<div class="musique">

</div>

<br/>
<!-- Pour récuperer les note en fonction de l'étoile, s'insipirer de selection catégorie-->
<div class="avis">
    <form id="form-avis" method="post" action="json/avis.php">
        <ul class="noteEtoile">
            <li class="etoileEteinte">
                <label for="note1">1</label>
                <input class="radioBut" type="radio" id="note1" value="1">
            </li>
            <li class="etoileEteinte">
                <label for="note2">2</label>
                <input class="radioBut" type="radio" id="note2" value="2">
            </li>
            <li class="etoileEteinte">
                <label for="note3">3</label>
                <input class="radioBut" type="radio" id="note3" value="3">
            </li>
            <li class="etoileEteinte">
                <label for="note4">4</label>
                <input class="radioBut" type="radio" id="note4" value="4">
            </li>
            <li class="etoileEteinte">
                <label for="note5">5</label>
                <input class="radioBut" type="radio" id="note5" value="5">
            </li>
        </ul>
        <br/>
        <select id="categorieChoisi" name="categorieChoisi">
            <option value="Rap">Rap</option>
            <option value="Rock">Rock</option>
            <option value="HipHop">Hip Hop</option>
            <option value="Humour">Humour</option>
            <option value="Jazz">Jazz</option>
            <option value="Reggaeton">Reggaeton</option>
        </select>
        <br/>
        <textarea style="width: auto" name="avisText">
    </textarea>
        <input type="submit" value="Envoyer" />
    </form>

</div>
<!-- Eviter de recharger à l'avenir-->
<button class="retour" onclick="window.location.reload(true)">Retour</button>



<script src="js/vendor/modernizr-3.5.0.min.js"></script>
<script src="js/vendor/jquery-3.2.1.min.js"></script>
<script src="js/plugins.js"></script>
<script src="js/ihm.js"></script>
<script src="js/main.js"></script>



</body>
</html>