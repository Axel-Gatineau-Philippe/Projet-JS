(function () {
    "use-strict"

    $(document).ready(function () {
        //Pour le code suivant, je me suis aidé d'internet mais je l'ai bien entendu adapté à mon code sans copier coller et en le comprenant.
        //A la souris
        $("ul.noteEtoile").addClass("allumer");
        $("ul.noteEtoile li").addClass("etoileEteinte");
        $("ul.noteEtoile li").mouseover(function () {
            $(this).nextAll("li").addClass("etoileEteinte");
            $(this).prevAll("li").removeClass("etoileEteinte");
            $(this).removeClass("etoileEteinte");
        });

        $("ul.noteEtoile").mouseout(function () {

            $(this).children("li").addClass("etoileEteinte");

            $(this).find("li input:checked").parent("li").trigger("mouseover");
        });


        //Coché par défault
        $('ul.noteEtoile input:checked').parent("li").trigger("mouseover");
        $("ul.noteEtoile input:checked").trigger("click");
    })

    //Utilisation du plugin pour le fond d'écran animé
    $('#background').particleground({
        dotColor: '#00ffff',
        lineColor: '#00ffff'
    });

})();