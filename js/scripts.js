$(window).load(function() {
	$('body').animate({ opacity:1 },500);	
});


$(document).ready(function() {

(function($) {
$.fn.menumaker = function(options) {  
 var cssmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   cssmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     cssmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });

     cssmenu.find('.sub_menu').on('click', function() {
       
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
     
   };
   if (settings.format === 'multitoggle') multiTg();
   else cssmenu.addClass('dropdown');
   if (settings.sticky === true) cssmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 767;
     if ($( window ).width() > mediasize) {
       cssmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       cssmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };

$(window).on('load resize', function () {

$('.home_slider').slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 3000,
  autoplaySpeed: 1500,
  arrows: true,
  slidesToShow: 1
});

$('.testimonials_slider').slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 3000,
  autoplaySpeed: 1500,
  adaptiveHeight: true,
  arrows: true,
  slidesToShow: 1
});
                      
});

})(jQuery);

(function($){
$(document).ready(function(){
$("#cssmenu").menumaker({
   format: "multitoggle"
});
});
})(jQuery);


});




