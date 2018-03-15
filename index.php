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
    <link rel="stylesheet" href="/vegas/vegas.min.css">
</head>
<body>
<!-- Add your site or application content here -->

<img id="home" src="https://image.noelshack.com/fichiers/2018/11/2/1520979355-home-1110868-960-720.png" alt="home" onclick="window.location.reload(true);">
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


<h1 style="display: none" id="titre1">eRated Music, le site qui laisse la parole aux fans de musique !</h1><br/>

<p id="presentation">eRated Music propose à ses utilisateurs de noter les dernières sortie de musiques par type sur cinq étoiles,
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

<form style="display:none" class="affichFormAvisArticle">
    <input type="button" value="Commenter et noter un article !" />
</form>
<br/>

<div class="musique">

</div>

<br/>
<div class="avisVisiteurs">
    <p>eRated ne vous permet pas seulement de noter des musiques. Vous avez également la possibilité de noter le site !
        N'hésitez pas laisser des remarques ou encore donner des suggestions !</p>
    <form id="form-avis-visiteurs" method="post" action="json/avisUtilisateurs.php">
        <input type="text" name="mail" value="eMail" onfocus="this.value=''">
        <br/>
        <label>Donnez votre avis sur le site :</label>
        <br/>
        <textarea style="width: auto" name="avisUtilisateur"></textarea>
        <br/>
        <input type="submit" value="Envoyer" />
    </form>
</div>

<div class="avisArticles">
    <form id="form-avis-articles" method="post" action="json/avis.php">
        <label>Choisissez la catégorie de l'article que vous souhaitez noter :</label>
        <select id="titreChoisi" name="titreChoisi">
        </select>
        <br/>
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
        <label>Donnez votre avis sur l'article :</label>
        <textarea style="width: auto" name="avisText" ></textarea>
        <br/>
        <input type="submit" value="Envoyer" />
    </form>
</div>

<div class="ajoutArticle">
    <form id="form-ajout-article" method="post" action="json/ajoutArticle.php">

        <input type="text" name="titre" value="Titre" onfocus="this.value=''"/>
        <br/>
        <input type="text" name="artiste" value="Artiste" onfocus="this.value=''"/>
        <br/>
        <input type="text" name="annee" value="Année" onfocus="this.value=''"/>
        <br/>
        <label>Choisissez la catégorie de l'article que vous souhaitez ajouter  :</label>
        <select id="genre" name="genre">
            <option value="Rap">Rap</option>
            <option value="Rock">Rock</option>
            <option value="HipHop">Hip Hop</option>
            <option value="Humour">Humour</option>
            <option value="Jazz">Jazz</option>
            <option value="Reggaeton">Reggaeton</option>
        </select>
        <br/>
        <label>Si vous l'avez, entrez le lien de l'image correspondant à la pochette de l'album :</label>
        <br/>
        <input type="text" name="pochette" value="Pochette" onfocus="this.value=''"/>
        <br/>
        <label>Donnez une note sur cinq à l'article que vous souhaitez ajouter :</label>
        <br/>
        <select id="noteAjout" name="noteAjout">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <br/>
        <label>Donnez votre avis sur l'article :</label>
        <textarea style="width: auto" name="avisAjout" ></textarea>
        <br/>
        <input type="submit" value="Envoyer" />
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