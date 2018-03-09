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

        //Au clavier
        /*$("ul.noteEtoile.radioBut")
            .focus(function() {
                $(this).parents("ul.noteEtoile").find("li").removeClass("noteTabulee");

                $(this).parent("li").addClass("noteTabulee");

                $(this).parent("li").nextAll("li").addClass("etoileEteinte");

                $(this).parent("li").prevAll("li").removeClass("etoileEteinte");

                $(this).parent("li").removeClass("etoileEteinte");
            })
            .blur(function() {
                $(this).parents("ul.noteEtoile").find("li").removeClass("noteTabulee");

                if($(this).parents("ul.noteEtoile").find("li input:checked").length == 0) {
                    $(this).parents("ul.noteEtoile").find("li").addClass("etoileEteinte");
                }
            })
            .click(function() {
                $(this).parents("ul.noteEtoile").find("li").removeClass("noteCochee");
                $(this).parent("li").addClass("noteCochee");
            });*/

        //Coché par défault
        $('ul.noteEtoile input:checked').parent("li").trigger("mouseover");
        $("ul.noteEtoile input:checked").trigger("click");
    })

})();