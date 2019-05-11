$(document).ready(function(){
    var $menu = $(".nav");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 200 ){
            $menu.addClass("fixed");
        } else if($(this).scrollTop() <= 200 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed");
        }
    });
})(jQuery);
