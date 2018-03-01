(function() {
    "use strict";

    let erreurCritique = function () {
        $('body').html('Erreur critique<br/>' + 'Veuillez contacter <br/>' + "axel13" + "10.p" + "@" + (true ? 'gmail': '') + ".com");
    };

    $(document).ready(function () {

        $.ajax({
            'url': '/json/est_connecte.php'
        }).done(function (data) {
            if (data.est_connecte) {
                $('#form-deconnexion').slideDown(1000);
                $('#RB').fadeIn();
                $('#Rock').fadeIn();
                $('#Reggae').fadeIn();
                $('#Jazz').fadeIn();
                $('#HipHop').fadeIn();

                $.ajax({
                    'url': '/json/est_connecte.php'
                }).done(function (data) {
                    /* data doit ressembler à :
                       {'musiques': [
                           {
                                "titre": "je marche seul",
                                "artiste": "jj gold"
                                "publication": "EMI"
                                "type": "populaire"
                           },
                           {
                                "titr"je marche seul",
                                "artiste": "jj gold"
                                "publication": "EMI"
                                "type": "populaire"
                           },
                        ]
                       }
                     */
                    for (let i=0; i<data.musiques.length; i++) {
                        let musique = data.musiques[i];
                        // let m = new Musique(musique.titre, musique.artiste, ...)
                    }

                }).fail(erreurCritique);
            }
            else {
                $('#presentation').fadeIn();
                $('#titre1').fadeIn();
                $('#titre-connexion').fadeIn();
                $('#form-connexion').slideDown(1000);
            }
        }).fail(erreurCritique);


        $('#form-connexion').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            })
                .done(function (data) {
                    console.log('data=' + data);
                    if (data.est_connecte === true) {
                        window.location.reload(true);
                    }
                    else {

                        console.log('Pas connecté');
                    }
                })
                .fail(erreurCritique);
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

        $('.selection-categorie').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            }).done(function (data) {
                console.log('data=' + data);
            }).fail(erreurCritique);
            return false;
        })

    });



}) ();
