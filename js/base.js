$(document).ready(function() {
    $('.owl-one').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.owl-two').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            767: {
                items: 4
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            },
        }
    })


    $(".view-sub_menu").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("rolate");
        $(this).prev().slideToggle("2000", "swing", function() {
            // Animation complete.
        });

    });
    $("#header a.menu-search").click(function(e) {
        e.preventDefault();
        $(".search-box").slideToggle();
        // $("#header ul.main-menu").slideUp();
    });
    $(".navbar-toggle").click(function(e) {
        e.preventDefault();
        $("#header ul.main-menu").slideToggle('2000', "swing", function() {
            // Animation complete.
        });
        $(".search-box").slideUp();
        $(".navbar-toggle i").toggleClass("fa fa-list fa fa-times");

    });
    $(window).bind('scroll', function() {
            if ($(window).scrollTop() >= 10) {
                $("#header").addClass("fixed");
            } else {
                $("#header").removeClass("fixed");
            }
        })
        // animation number
    $('.Count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // back-to-top
    $(".back-to-top").click(function(e) {
        e.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });
});