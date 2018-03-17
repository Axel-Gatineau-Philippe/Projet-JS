//Classe qui permet la création d'articles sous forme d'objets afin de rendre le code plus propre

let Article;
(function () {
    "use-strict";

    Article = function(titre, artiste, note, genre, pochette, avis, annee){
        this.titre = titre;
        this.artiste = artiste;
        this.note = note;
        this.genre = genre;
        this.pochette = pochette;
        this.avis = avis;
        this.annee = annee;

    }
})();