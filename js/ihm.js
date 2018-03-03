let affichForm;

(function () {
    "use-strict"

    affichForm = function () {
        let form = document.getElementById('form-inscription');

        if (form.style.display == 'none') {
            form.style.display = 'block';
        }
        else {
            form.style.display = 'none';
        }
    }
})();