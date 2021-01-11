$(document).ready(function() {
    
    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
        };
    });

    /* Owl carousel */
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

});