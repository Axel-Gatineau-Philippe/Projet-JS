(function() {
    "use strict";

    let erreurCritique = function () {
        $('body').html('Erreur critique<br/>' + 'Veuillez contacter <br/>' + "axel13" + "10.p" + "@" + (true ? 'gmail': '') + ".com");
    };

    $(document).ready(function () {

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
            })
                .done(function (data) {
                    console.log('data=' + data);
                    if (data.est_connecte === false) {
                        window.location.reload(true);
                    }
                    else {
                        console.log('Pas connecté');
                    }
                })
                .fail(erreurCritique);
            return false;
        });

        $.ajax({
            'url': '/json/est_connecte.php'
        })
            .done(function (data) {
                if (data.est_connecte) {
                    $('#form-deconnexion').slideDown(1000);
                    $('#RB').fadeIn();
                    $('#Rock').fadeIn();
                    $('#Reggae').fadeIn();
                    $('#Jazz').fadeIn();
                    $('#HipHop').fadeIn();
                }
                else {
                    $('#presentation').fadeIn();
                    $('#titre1').fadeIn();
                    $('#titre-connexion').fadeIn();
                    $('#form-connexion').slideDown(1000);
                }
            }).fail(erreurCritique);

    });

}) ();