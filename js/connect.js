$(document).ready(function () {
    var titre1 = "<h3>Connectez-vous pour accèder au contenu !</h3>"
    document.getElementById('AffTitre').innerHTML = resultat;
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
                $('#titre3').fadeIn();
                $('#form-connexion').slideDown(1000);
            }
        }).fail(erreurCritique);


});