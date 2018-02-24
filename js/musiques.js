let Musique;
(function () {
    "use-strict";

    Musique = function (titre, artiste, publication, type) {
        this.titre = titre;
        this.artiste = artiste;
        this.publication = publication;
        this.type = type;


        let self = this;
    };

    RB1 = new Musique("Rake it up", "Nicky Minaj", "2017", "R&B");

    console.log(RB1);


    //voir diapo 33 cours pour ensuite afficher les musiques sur la page
})();