(function ($) {
    "use strict";


    // Hamburger-menu
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu .line-top, .responsive-menu').toggleClass('current');
        $('.hamburger-menu .line-center').toggleClass('current');
        $('.hamburger-menu .line-bottom').toggleClass('current');
    });
    $('.brand-slider').owlCarousel({
        loop:true,
        autoPlay: true,
        margin:100,
        nav: false,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    })


    // all video controller none
    document.ready(function(){        
        $('video').prop('controls', false);
    });

})(jQuery);