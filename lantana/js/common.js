$(document).ready(function() {
	// Scroll-top
	var btn = $('.scroll-top');

	$(window).scroll(function() {
		if( $(window).scrollTop() > 300 ) {
			btn.show(300);
		} else {
			btn.hide(300);
		};
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate( {scrollTop: 0}, '300' );
	});

	// Overlay
	var showVideo       = $('.show-video');
	var closeVideo      = $('.close'); 
	var showBurgerMenu  = $('.header-nav__burger-menu');
	var closeBurgerMenu = $('.close-burger-menu');
	var closeTap        = $('.closeTap');

	showVideo.on('click', function() {
		$('.overlay-wrapper').show(100);
	});

	closeVideo.on('click', function() {
		$('.overlay-wrapper').hide(100);
	});

	showBurgerMenu.on('click', function() {
		$('.overlay-burger-menu').show(100);
	});

	closeBurgerMenu.on('click', function() {
		$('.overlay-burger-menu').hide(100);
	});

	closeTap.on('click', function() {
		$('.overlay-burger-menu').hide(100);
	});

	// Slow scroll for ID
	$(function(){
	    $("a[href^='#']").click(function(){
	            var _href = $(this).attr("href");
	            $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
	            return false;
	    });
	});

});

