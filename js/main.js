(function() {
    "use strict";

    let erreurCritique = function () {
        $('body').html('Erreur !<br/>' + 'Veuillez contacter <br/>' + "axel13" + "10.p" + "@" + (true ? 'gmail': '') + ".com" + ' si le problème persiste.');
    };

    let afficherArticles = function () {
        $.ajax({
            'url': '/json/musique.php'

        }).done(function (musiques) {
            console.log('musiques=' + musiques);
            for (let i=0; i<musiques.liste.length; ++i) {
                let musique = musiques.liste[i];
                let articles = new Article(musique.titre, musique.artiste, musique.note, musique.genre, musique.pochette, musique.avis, musique.annee);

                $('.musique').append(
                    $('<h1 <h1/>').append(articles.genre),
                    $('<div />').append(articles.pochette),
                    $('<h3 </h3>').append(articles.titre),
                    $('<h5 </h5>').append(articles.artiste),
                    $('<div />').append(articles.annee),
                    $('<div />').append(articles.note),
                    $('<div />').append(articles.avis),
                    $('<br/>')
                )
            }
        }).fail(erreurCritique);
        return false;
    };

    let creerFormConnexion = function () {
        $('#form-connexion').append($('<br/>'))
            .append($('<input type="text" name="mail" placeholder="eMail"/>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<input type="password" name="pass" placeholder="Mot de passe" />'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<input type="submit" value="Connexion"/>'))
            .append($('<br/>'))
    };

    let creerFormInscription = function () {
        $('#form-inscription').append($('<h3 >Entrez vos informations personnelles :</h3>'))
            .append($('<br/>'))
            .append($('<input type="text" name="prenom" placeholder="Prénom"/>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<input type="text" name="nom" placeholder="Nom"/>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<input type="text" name="mail" placeholder="eMail"/>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<input type="password" name="pass" placeholder="Mot de passe"/>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<input type="submit" value="Valider"/>'))
            .append($('<br/>'))
    };

    let creerFormAvisVisiteur = function () {
        $('#divAvisArticle').append($('<p>eRated ne vous permet pas seulement de noter des musiques. Vous avez également la possibilité de noter le site !. N\'hésitez pas laisser des remarques ou encore donner des suggestions !</p>'))
            .append($('<br/>'))
            .append($('<input type="text" name="mail" placeholder="eMail"/>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<label>Donnez votre avis sur le site :</label>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<textarea style="width: auto" name="avisUtilisateur"></textarea>'))
            .append($('<br/>'))
            .append($('<input type="submit" value="Envoyer" />'))

    };

    let creerFormAvisArticle = function () {
        $('#form-avis-articles').append($('<label> Choisissez le titre que vous souhaitez noter :</label>'))
            .append($('<br/>'))
            .append($('<select id="titreChoisi" name="titreChoisi"></select>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<label>Donnez votre avis sur l\'article :</label>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<textarea style="width: auto" name="avisText" ></textarea>'))
            .append($('<br/>'))
            .append($('<input type="submit" value="Envoyer" />'))
    };

    let creerFormAjoutArticle = function () {
        $('#form-ajout-article').append($('<p>Remplissez les informations ci-dessous afin d\'ajouter un nouvel article : </p>'))
            .append($('<br/>'))
            .append($('<input type="text" name="titre" placeholder="Titre"/>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<input type="text" name="artiste" placeholder="Artiste"/>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<input type="text" name="annee" placeholder="Année"/>'))
            .append($(' <br/>'))
            .append($('<br/>'))
            .append($('<label>Choisissez la catégorie de l\'article que vous souhaitez ajouter  :</label>'))
            .append($('<br/>'))
            .append($('<select id="genre" name="genre" </select>')
                .append($('<option value="Rap">Rap</option>'))
                .append($('<option value="Rock">Rock</option>'))
                .append($('<option value="HipHop">Hip Hop</option>'))
                .append($('<option value="Humour">Humour</option>'))
                .append($('<option value="Jazz">Jazz</option>'))
                .append($('<option value="Reggaeton">Reggaeton</option>')))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<label>Si vous l\'avez, entrez le lien de l\'image correspondant à la pochette de l\'album :</label>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<input type="text" name="pochette" placeholder="Pochette"/>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<label>Donnez une note sur cinq à l\'article que vous souhaitez ajouter :</label>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($(' <select id="noteAjout" name="noteAjout" </select>')
                .append($('<option value="1">1</option>'))
                .append($('<option value="2">2</option>'))
                .append($('<option value="3">3</option>'))
                .append($('<option value="4">4</option>'))
                .append($('<option value="5">5</option>')))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<label>Donnez votre avis sur l\'article :</label>'))
            .append($('<br/>'))
            .append($('<br/>'))
            .append($('<textarea style="width: auto" name="avisAjout" ></textarea>'))
            .append($('<br/>'))
            .append($('<input type="submit" value="Envoyer" />'))
    };

    let afficherArticlesNotation = function () {
        $.ajax({
            'url': '/json/musique.php'

        }).done(function (musiques) {
            console.log('musiques=' + musiques);
            for (let i = 0; i < musiques.liste.length; ++i) {
                let musique = musiques.liste[i];
                let articles = new Article(musique.titre, musique.artiste, musique.note, musique.genre, musique.pochette, musique.avis, musique.annee);

                $('#titreChoisi').append(
                    $('<option value="' + articles.titre + '" </option>').append(articles.titre)
                )
            }
        }).fail(erreurCritique);
        return false;
    };


    //Utilisation du plugin VEGASJS
    $('body').vegas({
        slides: [
            { src: 'https://image.noelshack.com/fichiers/2018/11/4/1521107125-elegant-transparent-cyan-fabric-or-film-motion-background-4k-animation-rpqkjnqfl-thumbnail-full01.png' },
            { src: 'https://image.noelshack.com/fichiers/2018/11/4/1521107125-110385.jpg' },
            { src: 'https://image.noelshack.com/fichiers/2018/11/4/1521107125-images.jpg' }
        ]
    });

    $(document).ready(function () {

        $.ajax({
            'url': '/json/est_connecte.php'
        }).done(function (data) {
            if (data.est_connecte) {
                $('#form-deconnexion').fadeIn();
                afficherArticles();
                $('.musique').fadeIn();
                $('.affichFormAvisVisiteur').fadeIn();
                $('.affichFormAvisArticle').fadeIn();
                $('#form-avis-articles').fadeIn();
                $('#form-avis-visiteurs').fadeIn();
                $('.affichAjoutArticle').fadeIn();
                $('#form-ajout-article').fadeIn();
            }
            else {
                creerFormConnexion();
                $('#presentation').fadeIn();
                $('#titre1').fadeIn();
                $('#titre-connexion').fadeIn();
                $('#form-connexion').slideDown(1000);
                $('.affichFormInsc').slideDown(1000);


            }
        }).fail(erreurCritique);


        $('#form-inscription').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (data) {
                console.log('data=' + data);
                if (data.result === true) {
                    alert('Inscription validée');
                    window.location.reload(true);
                }
                else {
                    alert('Utilisateur non inscrit ou déjà existant');
                    console.log('Non inscrit');
                }
            }).fail(erreurCritique);
            return false;
        });

        $('#form-connexion').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (data) {
                console.log('data=' + data);
                if (data.est_connecte === true) {
                    window.location.reload(true);
                }
                else {
                    alert('Identifiant ou mot de passe incorrect !');
                    console.log('Pas connecté');
                }
            }).fail(erreurCritique);
            return false;
        });


        $('#form-deconnexion').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (data) {
                console.log('data=' + data);
                if (data.est_connecte === false) {
                    window.location.reload(true);
                }
                else {
                    console.log('Pas connecté');
                }
            }).fail(erreurCritique);
            return false;
        });


        $('#form-avis-articles').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (avis) {
                alert('Votre avis à été envoyé');
                window.location.reload(true);
            }).fail(erreurCritique);
            return false;
        });

        $('#form-avis-visiteurs').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (avisUtil) {
                alert('Votre avis à été envoyé');
                window.location.reload(true);
            }).fail(erreurCritique);
            return false;
        });

        $('#form-ajout-article').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (ajout) {
                console.log(ajout);
                alert('L\'article a été ajouté');
                window.location.reload(true);
            }).fail(erreurCritique);
            return false;
        });


        $('.affichFormInsc').click(function () {
            creerFormInscription();
            $('.inscription').toggleClass("show", function () {

            });
            $('html, body').stop()
                .animate( {
                    scrollTop: $('#form-inscription')
                        .offset().top }, 500);
        });

        $('.affichFormAvisArticle').click(function () {
            creerFormAvisArticle();
            afficherArticlesNotation();
            $('.avisArticles').toggleClass("show", function () {

            });

            $('.musique').toggleClass("hide", function () {

            });
            $('.retour').toggleClass("show", function () {

            });
        });

        $('.affichFormAvisVisiteur').click(function () {
            creerFormAvisVisiteur();
            $('.avisVisiteurs').toggleClass("show", function () {

            });
            $('.musique').toggleClass("hide", function () {

            });
            $('.retour').toggleClass("show", function () {

            });
            $('.affichFormAvisArticle').toggleClass("hide", function () {

            });
        });

        $('.affichAjoutArticle').click(function () {
            creerFormAjoutArticle();
            $('.ajoutArticle').toggleClass("show", function () {

            });
            $('.musique').toggleClass("hide", function () {

            });
            $('.retour').toggleClass("show", function () {

            });
            $('.affichFormAvisArticle').toggleClass("hide", function () {

            });
        })
    });

}) ();
