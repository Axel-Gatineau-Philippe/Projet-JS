(function() {
    "use strict";

    let erreurCritique = function () {
        $('body').html('Erreur critique<br/>');
    };

    let surbrillance = function() {
        $(this).css({'background-color': 'red'});
    };

    let css_commun = {
        'display': 'inline-block',
        'border': '1px solid black',
        'min-width': '50px',
        'min-height': '50px',
        'margin': '2',
        'padding': '2',
        'text-align': 'center',
        'font-family': 'Arial',
        'font-size' : '45px'
    };

    let css_blanc = {
        'background-color': 'white',
        'color': 'black'
    };

    let css_noir = {
        'background-color': 'black',
        'color': 'white'
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
            .done(function (data){
                if (data.est_connecte) {
                    $('#form-deconnexion').slideDown(1000);
                    $('#conteneur').slideDown(1000);
                }
                else {
                    $('#form-connexion').slideDown(1000);
                }
            }).fail(erreurCritique);

        new Damier(3, 3, '#conteneur');

        $('.case-blanche').css(css_commun).css(css_blanc).hover(
            surbrillance,
            function() {
                $(this).css(css_commun).css(css_blanc);
            }
        );

        $('.case-noire').css(css_commun).css(css_noir).hover( // 1er parametre : quand on entre, 2e : quand on sort
            surbrillance, // et pas surbrillance()
            function() {
                $(this).css(css_commun).css(css_noir);
            }
        );
    });

}) ();