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
                $('.musique').fadeIn();
                afficherArticles();
                $('.affichFormAvisVisiteur').fadeIn();
                $('.affichFormAvisArticle').fadeIn();
                $('#form-avis-articles').fadeIn();
                $('#form-avis-visiteurs').fadeIn();
                $('.affichAjoutArticle').fadeIn();
                $('#form-ajout-article').fadeIn();
            }
            else {
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
            $('.inscription').toggleClass("show", function () {

            });
            $('html, body').stop()
                .animate( {
                    scrollTop: $('#form-inscription')
                        .offset().top }, 500);
        });

        $('.affichFormAvisArticle').click(function () {
            afficherArticlesNotation();
            $('.avisArticles').toggleClass("show", function () {

            });

            $('.musique').toggleClass("hide", function () {

            });
            $('.retour').toggleClass("show", function () {

            });
        });

        $('.affichFormAvisVisiteur').click(function () {
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
