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
            $(this).removeClass("etoieEteinte");
        });

        $("ul.noteEtoile").mouseout(function () {

            $(this).children("li").addClass("etoileEtinte");

            $(this).find("li input:checked").parent("li").trigger("mouseover");
        });

        //Au clavier
        $("ul.notes-echelle input")
            .focus(function() {
                $(this).parent("li").nextAll("li").addClass("etoileEteinte");

                $(this).parent("li").prevAll("li").removeClass("etoileEteinte");

                $(this).parent("li").removeClass("etoileEteinte");
            })
            .blur(function() {
                if($(this).parents("ul.noteEtoile").find("li input:checked").length == 0) {
                    $(this).parents("ul.noteEtoile").find("li").addClass("etoileEteinte");
                }
            });
    })

})();