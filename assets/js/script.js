(function($) {

    "use strict";

    /* ---- Textillate ---- */
    $('.til').textillate({

        // enable looping
        loop: true,
        in: {
            effect: 'fadeIn',
            delayScale: 1.5,
            delay: 150,
            shuffle: true
        },
        out: {
            effect: 'fadeOut',
            delayScale: 1.5,
            delay: 150,
            shuffle: true
        }
    });

    /* ---- Owl Carousel Testimonial ---- */
    $(".testi-holder").owlCarousel({
        singleItem: true,
        navigationText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
        navigation: true,
        pagination: false,
        transitionStyle: "fade"
    });

    /* ---- Owl Carousel Skill ---- */
    $(".skill-holder").owlCarousel({
        singleItem: true,
        navigationText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
        navigation: true,
        pagination: false,
        addClassActive: true,
        afterMove: function() {
            if ($(this).find('active')) {
                $('.active .skillbar').each(function() {
                    if (!$(this).find('.skillbar-bar').hasClass('to-animate')) {
                        $(this).find('.skillbar-bar').addClass('to-animate');
                        animateSkill(950);
                    }
                });
            }
        }
    });

    /* ---- Owl Carousel Portfolio ---- */
    $(".port-holder").owlCarousel({
        items: 3,
        itemsDesktop: false,
        itemsDesktopSmall: [991, 2],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: false,
        //[479,1], 
        navigationText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
        navigation: true,
        pagination: false
    });

    /* ---- Magnific Popup ---- */
    $('.popup-it').magnificPopup({
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-ios-close-empty"></i></button>'
    });

    /* ---- Magnific Bug Workaround ---- */
    $(document).on('click', '.mfp-close', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    /* ---- Facts Counter ---- */
    $('.counter-data').counterUp({
        delay: 10,
        time: 2000
    });

    /* ---- Menu Toggle Class ---- */
    $('.menu-holder').on('click', function() {
        $('.menu').toggleClass('menu-active');
    });

    /* ---- One Page Nav ---- */
    $('.menu-ul').onePageNav({
        currentClass: 'current',
        easing: 'swing'
    });

    /* ---- Skill Scroll To Run ---- */
    var loop = 0;

    var oTop = $('.skill-area').offset().top - window.innerHeight;

    $(window).on('scroll', function() {

        var pTop = $(window).scrollTop();

        if (pTop >= oTop && loop == 0) {
            animateSkill(950);
        }
    });

    function animateSkill(delay) {
        $('.skillbar').each(function() {

            $(this).find('.to-animate').animate({

                width: $(this).attr('data-percent')

            }, delay);

            delay += 350;
        });

        loop = 1;
    }

    /* ---- WOW JS ---- */
    new WOW().init();

}
)(jQuery);

/**
    * Disable right-click of mouse, F12 key, and save key combinations on page
    */

window.onload = function() {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
        }
        if (event.keyCode == 123) {
            disabledEvent(e);
        }
    }, false);
    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
}
;
