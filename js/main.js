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
                $('.selection-categorie').fadeIn();
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
            }).done(function (musiques) {

                console.log('musiques=' + musiques);
                for (let i=0; i<musiques.liste.length; ++i) {
                    let musique = musiques.liste[i];
                    $('.musique').append(
                        $('<div />').append(musique.titre),
                        $('<div />').append(musique.artiste),
                        $('<div />').append(musique.date),
                        $('<div />').append(musique.genre)
                    )
                }
            }).fail(erreurCritique);
            return false;
        }).click(function () {
            $('.musique').toggleClass("hide", function () {
            });
        });
    });



}) ();
