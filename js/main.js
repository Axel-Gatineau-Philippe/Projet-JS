(function() {
    "use strict";

    //Fonction affichant les coordonnées en cas d'erreur
    let erreurCritique = function () {
        $('body').html('Erreur !<br/>' + 'Veuillez contacter <br/>' + "axel13" + "10.p" + "@" + (true ? 'gmail': '') + ".com" + ' si le problème persiste.');
    };

    //Fonction permettant de creer les articles à partir des élements de la base de données
    let afficherArticles = function () {
        $.ajax({
            'url': '/json/musique.php'

        }).done(function (musiques) {
            console.log('musiques=' + musiques);
            for (let i=0; i<musiques.liste.length; ++i) {
                let musique = musiques.liste[i];
                let articles = new Article(musique.titre, musique.artiste, musique.note, musique.genre, musique.pochette, musique.avis, musique.annee);

                $('.musique').append(
                    $('<h1 <h1/>').append(articles.genre)
                        .css({
                            'font-family' : 'fantasy',
                            'font-size' : '70px',
                            'font-weight' : 'bold'
                        }),
                    $('<div />').append(articles.pochette),
                    $('<div />').append(
                        $('<h2 </h2>').append(articles.titre)
                            .css({
                                'font-size' : '50px',
                                'font-weight' : 'bold',
                                'font-style' : 'italic'
                            }),
                        $('<div />').append($('<h3 </h3>')
                            .append('Artiste :')
                            .append($('<h5 </h5>')
                                .append(articles.artiste))),
                        $('<div />').append($('<h3 </h3>')
                            .append('Année de sortie : '))
                            .append(articles.annee),
                        $('<div />').append($('<h3 </h3>')
                            .append('Note : '))
                            .append(articles.note +'/5'),
                        $('<div />').append($('<h3 </h3>')
                            .append('Dernier avis posté : '))
                            .append(articles.avis))
                        .css({
                            'background-color':'#dcd7e1',
                            'border-radius' : '8px',
                            'padding-botom' : '4px'
                        })

                )
            }
        }).fail(erreurCritique);
        return false;
    };

    //Fonction permettant de creer le formulaire de connexion en dynamique
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

    //Fonction permettant de creer le formulaire d'inscription en dynamique
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

    //Fonction permettant de creer le formulaire pour l'avis des visiteurs en dynamique
    let creerFormAvisVisiteur = function () {
        $('#form-avis-visiteurs').append($('<p>eRated ne vous permet pas seulement de noter des musiques. Vous avez également la possibilité de noter le site !' + "\n" +  'N\'hésitez pas laisser des remarques ou encore donner des suggestions !</p>'))
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

    //Fonction permettant de creer le formulaire permettant de laisser son avis sur les article en dynamique
    let creerFormAvisArticle = function () {
        $('#divAvisArticle').append($('<label> Choisissez le titre que vous souhaitez noter :</label>'))
            .append($('<br/>'))
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

    //Fonction permettant de creer le formulaire permettant d'ajouter des articles en dynamique
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

    //Fonction permettant d'afficher les titre présent dans la base pour le formulaire de notation des articles
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


    $(document).ready(function () {

        //Appel Ajax permettant de savoir si l'utilisateur est connecté
        $.ajax({
            'url': '/json/est_connecte.php'
        }).done(function (data) {
            if (data.est_connecte) {
                $('#form-deconnexion').fadeIn(1000);
                $('#home').fadeIn(1000);
                $('#fleche').fadeIn(1000);
                afficherArticles();
                $('.hautpage').slideDown(1000);
                $('.musique').slideDown(1000);
                $('.affichFormAvisVisiteur').fadeIn(1000);
                $('.affichFormAvisArticle').fadeIn(1000);
                $('#form-avis-articles').slideDown(1000);
                $('#form-avis-visiteurs').slideDown(1000);
                $('.affichAjoutArticle').fadeIn(1000);
                $('#form-ajout-article').slideDown(1000);
                $('.afficherSelonGenre').slideDown(1000);
            }
            else {
                creerFormInscription();
                creerFormConnexion();
                $('#presentation').slideDown(1000);
                $('#titre-connexion').slideDown(1000);
                $('#form-connexion').slideDown(1000);
                $('.affichFormInsc').fadeIn(1000);
                $('#form-inscription').slideDown(1000);


            }
        }).fail(erreurCritique);

        $('#form-inscription').submit(function () {

            //Appel Ajax permettant l'inscription d'un utilisateur
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
            //Appel Ajax permettant la connexion d'un utilisateur
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

            //Appel Ajax permettant la deconnexion d'un utilisateur
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

            //Appel Ajax permettant l'envoi de la note et de l'avis d'un utilisateur
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

            //Appel Ajax permettant l'envoi de l'avis par mail d'un utilisateur
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

            //Appel Ajax permettant la création d'un nouvel article
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

        //Bouton qui permet d'afficher le formulaire d'inscription lorsque l'on clique dessus
        $('.affichFormInsc').click(function () {
            $('.inscription').slideDown(1000);
            $('html, body').stop()
                .animate( {
                    scrollTop: $('#form-inscription')
                        .offset().top }, 500);
        });

        //Bouton qui permet d'afficher le formulaire permettant de donner son avis sur un article lorsque l'on clique dessus
        $('.affichFormAvisArticle').click(function () {
            creerFormAvisArticle();
            afficherArticlesNotation();
            $('.avisArticles').slideDown(1000);
            $('.musique').slideUp(1000);
            $('.retour').fadeIn(1000);
            $('.hautpage').fadeOut(1000);
        });

        //Bouton qui permet d'afficher le formulaire qui permet de donner son avis sur le site lorsque l'on clique dessus
        $('.affichFormAvisVisiteur').click(function () {
            creerFormAvisVisiteur();
            $('.avisVisiteurs').slideDown(1000);
            $('.musique').slideUp(1000);
            $('.retour').fadeIn(1000);
            $('.affichFormAvisArticle').slideUp(1000);
            $('.hautpage').fadeOut(1000);
        });

        //Bouton qui permet d'afficher le formulaire d'ajout d'article lorsque l'on clique dessus
        $('.affichAjoutArticle').click(function () {
            creerFormAjoutArticle();
            $('.ajoutArticle').slideDown(1000);
            $('.musique').slideUp(1000);
            $('.retour').fadeIn(1000);
            $('.affichFormAvisArticle').slideUp(1000);
            $('.hautpage').fadeOut(1000);
        });


        //Pour la notation sous forme d'étoile, je me suis aidé d'internet afin d'utiliser différentes techniques (notamment l'utilisation d'un sprite). Bien entendu, le code n'a pas été copié collé
        //JQuery permettant aux étoiles d'être illuminées lors du survol
        $("ul.noteEtoile li").addClass("etoileEteinte")
            .mouseover(function () {
                $(this).nextAll("li").addClass("etoileEteinte");
                $(this).prevAll("li").removeClass("etoileEteinte");
                $(this).removeClass("etoileEteinte");
            });

        //JQuery permettant aux étoiles d'être éteintes lorsqu'elles ne sont plus survolées
        $("ul.noteEtoile").addClass("allumer").mouseout(function () {
            $(this).children("li").addClass("etoileEteinte");
            $(this).find("li input:checked").parent("li").trigger("mouseover");
        });

        //Utilisation du pluggin VegasJS permettant de faire défiler différents background
        $('body').vegas({
            slides: [
                { src: 'https://image.noelshack.com/fichiers/2018/11/4/1521107125-elegant-transparent-cyan-fabric-or-film-motion-background-4k-animation-rpqkjnqfl-thumbnail-full01.png' },
                { src: 'https://image.noelshack.com/fichiers/2018/11/4/1521107125-110385.jpg' },
                { src: 'https://image.noelshack.com/fichiers/2018/11/4/1521107125-images.jpg' }
            ]
        });

        //JQuery permettant de faire apparaître un menu lors du survol du bouton "Home"
        $('#home').mouseover(function () {
            $('.menu').slideDown(1000);
        });
    });

}) ();
