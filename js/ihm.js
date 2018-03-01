(function () {
    "use-strict"

    $(document).ready(function () {
        $('body').on("click", "#musique", function(evt) {
            $(this).toggleClass("select");
            $("#musique").toggleClass("show");
        });
    })

})