

(function () {
    "use-strict"

    $(document).ready(function () {
        //Pour le code suivant, je me suis aidé d'internet mais je l'ai bien entendu adapté à mon code sans copier coller et en le comprenant.

        $("ul.noteEtoile li").addClass("etoileEteinte").mouseover(function () {
            $(this).nextAll("li").addClass("etoileEteinte");
            $(this).prevAll("li").removeClass("etoileEteinte");
            $(this).removeClass("etoileEteinte");
        });

        $("ul.noteEtoile").addClass("allumer").mouseout(function () {

            $(this).children("li").addClass("etoileEteinte");

            $(this).find("li input:checked").parent("li").trigger("mouseover");
        });

        $('ul.noteEtoile input:checked').parent("li").trigger("mouseover");



        $('#home').mouseover(function () {
            $('.menu').fadeIn(100);
        })
    });


})();