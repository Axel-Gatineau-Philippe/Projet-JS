let Damier; // on prépare une variable qui correspond à la classe

(function() {
    "use strict";
    /* contexte local : les variables seront détruites */

    Damier = function (nbColonnes, nbLignes, destination) {
        this.nbColonnes  = nbColonnes;
        this.nbLignes    = nbLignes;
        this.destination = $(destination);
        this.joueur_un   = true;
        this.tableau     = [];

        let self = this; // Conserver le contexte

        this.get_joueur_en_cours = function () {
            return (self.joueur_un ? "X" : "O");
        };

        this.nb_cases_identiques = function (y_start, x_start, y_add, x_add) {
            let resultat = 1;
            let x = x_start;
            let y = y_start;

            if(self.tableau[y][x] === null) {
                return 1;
            }

            while (x + x_add >= 0 &&
                y + y_add >= 0 &&
                x + x_add < self.nbColonnes &&
                y + y_add < self.nbLignes
                ) {
                console.log(y);
                console.log(y+y_add);
                if (self.tableau[y + y_add][x + x_add] !== self.tableau[y][x]) {
                    break;
                }
                x += x_add;
                y += y_add;
                ++resultat;
            }
            return resultat;
        };

        this.joueur_a_gagne = function () {
            for(let y = 0; y < this.nbLignes; ++y) {
                for(let x = 0; x < this.nbColonnes; ++x) {
                    if(this.nb_cases_identiques(y, x, 1, 0) === 3) {
                        return true;
                    }
                    if(this.nb_cases_identiques(y, x, 0, 1) === 3) {
                        return true;
                    }
                    if(this.nb_cases_identiques(y, x, 1, 1) === 3) {
                        return true;
                    }
                    if(this.nb_cases_identiques(y, x, -1, 1) === 3) {
                        return true;
                    }
                }
            }
            return false;
        };

        this.creer_case = function (x, y) {
            return $('<div />')
                .html('&nbsp;')
                .data('x', x) // deux paramètres : écrire, un paramètre : lire
                .data('y', y)
                .click(function () {
                    /*console.log('this=' + this); // this : élement dans le DOM
                    console.log($(this));        // utiliser les fonctions de jQuery*/

                    /*console.log("DEBUT");
                    $(this).fadeOut(2000, function () {
                        console.log("TERMINE");
                    });
                    console.log("FIN");
                    // Affiche : DEBUT FIN TERMINE
                    */

                    /*console.log(self.nbColonnes);
                    console.log(self.nbLignes);*/
                    // Closure : faire référence à l'élément d'origine
                    // Sinon this fait référence à la case, pas à l'objet

                    let x = $(this).data('x');
                    let y = $(this).data('y');

                    $(this).unbind('click');

                    self.tableau[y][x] = self.joueur_un;
                    $(this).html(self.get_joueur_en_cours());

                    if(self.joueur_a_gagne()) {
                        self.destination.slideUp(function () {
                            $(this).html('Gagné !').slideDown(1000);
                        })
                    }
                    else {
                        self.joueur_un = !self.joueur_un;
                    }
                });
        };

        this.creer_case_blanche = function (x, y) {
            return self.creer_case(y, x).addClass('case-blanche');
        };

        this.creer_case_noire = function (x, y) {
            return self.creer_case(y, x).addClass('case-noire');
        };

        for(let y = 0; y < this.nbLignes; ++y) {
            this.tableau.push([]);
            let ligne = $('<div />'), fn1, fn2; // "tr"

            if(y % 2) {
                fn1 = this.creer_case_blanche;
                fn2 = this.creer_case_noire;
            }
            else {
                fn1 = this.creer_case_noire;
                fn2 = this.creer_case_blanche;
            }
            for(let x = 0; x < this.nbColonnes; ++x) {
                this.tableau[y].push(null); // Initialise la deuxieme dimension
                ligne.append(x % 2 ? fn2(y, x) : fn1(y, x));
            }

            this.destination.append(ligne);
        }
    }
}) ();