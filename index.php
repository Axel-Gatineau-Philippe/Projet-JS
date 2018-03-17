<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>eRated Music</title>
    <meta name="author" content="Axel GATINEAU PHILIPPE">
    <meta name="description" content="eRated">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="manifest" href="site.webmanifest">
    <link rel="apple-touch-icon" href="favicon.ico">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="/vegas/vegas.min.css">
</head>
<body>
<!-- Add your site or application content here -->

<img id="home" src="https://image.noelshack.com/fichiers/2018/11/2/1520979355-home-1110868-960-720.png" alt="home" onclick="window.location.reload(true);">
<img id="fleche" src="https://image.noelshack.com/fichiers/2018/11/6/1521244389-keyboard-right-arrow-button-1-icon-icons-com-72690.png" alt="home" onclick="$('.menu').slideDown(1000);">
<form style="display:none" class="affichFormInsc">
    <input type="button" value="S'inscrire" />
</form>
<nav class="menu" style="display: none">

    <ul>
        <li>
            <form id="form-deconnexion" style="display: none;" method="post" action="json/deconnexion.php">
                <input type="submit" value="Se déconnecter" onclick=""/>
            </form>
        </li>
        <li>
            <form style="display:none" class="affichFormAvisVisiteur">
                <input type="button" value="Donnez votre avis !" />
            </form>
        </li>
        <li>
            <form style="display:none" class="affichAjoutArticle">
                <input type="button" value="Ajouter un article" />
            </form>
        </li>
        <li>
            <button class="retour" onclick="window.location.reload(true)">Retour</button>
        </li>
    </ul>
</nav>

<br/>
<br/>

<h1 id="titre1">eRated Music, le site qui laisse la parole aux fans de musique !</h1><br/>

<p id="presentation">eRated Music vous propose de noter différents titre de musique, avec la possibilité de laisser votre avis, mais également d'ajouter de nouveaux titres de votre choix.<br/>
    Bonne visite !</p>

<h3 style="display: none" id="titre-connexion">Authentifiez vous :</h3>

<form style="display:none; text-align: center;" id="form-connexion" method="post" action="json/connexion.php"><br/>
</form>

<br/>


<div class="inscription">
    <form id="form-inscription" method="post" action="json/inscription.php">
    </form>
</div>

<br/>

<form style="display:none" class="affichFormAvisArticle">
    <input type="button" value="Commenter et noter un article" />
</form>
<br/>

<div class="musique">
</div>

<br/>
<div class="avisVisiteurs">
    <form id="form-avis-visiteurs" method="post" action="json/avisUtilisateurs.php">
    </form>
</div>

<div class="ajoutArticle">
    <form id="form-ajout-article" method="post" action="json/ajoutArticle.php">

    </form>
</div>

<div class="avisArticles">
    <form id="form-avis-articles" method="post" action="json/avis.php">
        <div id="divAvisArticle"</div>
<!-- Ici, le code est affiché en dur car sinon les étoiles ne changent pas de couleurs avec le mouseover-->
<ul class="noteEtoile">
    <li class="etoileEteinte">
        <label for="note1">~</label>
        <input class="radioBut" type="radio" id="note1" value="1" name="note">
    </li>
    <li class="etoileEteinte">
        <label for="note2">~</label>
        <input class="radioBut" type="radio" id="note2" value="2" name="note">
    </li>
    <li class="etoileEteinte">
        <label for="note3">~</label>
        <input class="radioBut" type="radio" id="note3" value="3" name="note">
    </li>
    <li class="etoileEteinte">
        <label for="note4">~</label>
        <input class="radioBut" type="radio" id="note4" value="4" name="note">
    </li>
    <li class="etoileEteinte">
        <label for="note5">~</label>
        <input class="radioBut" type="radio" id="note5" value="5" name="note">
    </li>
</ul>
<br/>
<br/>
</form>
</div>








<script src="js/vendor/modernizr-3.5.0.min.js"></script>
<script src="js/vendor/jquery-3.2.1.min.js"></script>
<script src="js/plugins.js"></script>
<script src="js/ihm.js"></script>
<script src="js/articles.js"></script>
<script src="vegas/vegas.min.js"></script>
<script src="js/main.js"></script>






</body>
</html>