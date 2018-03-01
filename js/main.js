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

                $.ajax({
                    'url': '/json/est_connecte.php'
                }).done(function (resultat) {
                    for (let i=0; i<resultat.musiques.length; ++i) {

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
            }).done(function (resultat) {

                console.log('resultat=' + resultat);
            }).fail(erreurCritique);
            return false;
        })

    });



}) ();

let getArticles = function () {
        $.ajax({
            url: '/json/articles.php',
            method: 'get'
        }).done(function (data) {
            $('#titre-articles').fadeIn();
            for (let i = 0; i < data.articles.length; ++i) {
                let article = data.articles[i];
                $('#div-articles').append(
                    /* affichage des données reçues */
$('<h3 />').append(article.id),
    $('<p />').append(article.marque).append(' ')
        .append(article.modele).append(' <br/>')
        .append(article.prix).append(' €<br/>')
        .append(article.note).append(' / 5<br/>'),
    /* div qui contient deux autres div pour les placer côte à côte */
    $('<div />').css({
        'margin-left': 'auto',
        'margin-right': 'auto',
        'margin-bottom': '50px',
        'width': '50%',
        'padding-top': '10px'
    }).append(
        /* div pour afficher les informations */
        $('<div />').data('id_article', article.id).css({
            'border': 'solid blue 1px',
            'border-radius': '10px',
            'display': 'inline-block',
            'margin-right': '10px',
            'padding': '10px',
            'width': '40%'
        }).hover(function () {
            $(this).css({
                'background-color': 'yellow'
            });
        }, function () {
            $(this).css({'background-color': 'white'})
        }).click(getInformations).append('Informations'),
        /* div pour noter */
        $('<div />').css({
            'border': 'solid blue 1px',
            'border-radius': '10px',
            'display': 'inline-block',
            'padding': '10px',
            'width': '40%'
        }).hover(function () {
            $(this).css({
                'background-color': 'yellow'
            });
        }, function () {
            $(this).css({'background-color': 'white'})
        }).click(noter).append('Noter')
    )
)
}
}).fail(erreurCritique);*/