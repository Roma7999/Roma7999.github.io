$(document).ready(function() {
    var $menu = $(".nav");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $menu.addClass("fixed");
        } else if ($(this).scrollTop() <= 200 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed");
        }
    });
        $(function () {
            var hamburger = $('.hamburger'),
                nav = $('nav');
            hamburger.on('click', function () {
                nav.toggleClass('opened');
                $(this).toggleClass('active');
            });
            $(window).on('resize', function () {
                if ($(this).width() > 640) {
                    nav.removeClass('opened');
                    hamburger.removeClass('active');
                }
            });
        });
    })(jQuery);
