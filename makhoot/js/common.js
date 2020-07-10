$(document).ready(function() {
	// Slider
	$('.slider-list').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  arrows: false,
	  dots: true,
	});

	$('.reviews-list').slick({
		slidesToShow: 2,
	  	slidesToScroll: 2,
	 	arrows: true,
	 	dots: false,
	 	responsive: [{
	 		breakpoint: 992,
	 		settings: {
	 			slidesToShow: 1,
	 			slidesToScroll: 1,
	 		}

	 	}]
	});

	$('.slick-dots li button').text('');
	$('.slick-next').text('');
	$('.slick-prev').text('');

	// Tarifs-tabs
	$('.tarifs-tabs__left').click(function() {
		$(this).addClass('tarifs-active');
		$('.tarifs-tabs__right').removeClass('tarifs-active');
		$('#mak-3 p').text('113');
		$('#mak-10 p').text('219');
		$('#mak-15 p').text('349');
		$('#mak-30 p').text('615');
	});

	$('.tarifs-tabs__right').click(function() {
		$(this).addClass('tarifs-active');
		$('.tarifs-tabs__left').removeClass('tarifs-active');
		$('#mak-3 p').text('990');
		$('#mak-10 p').text('2390');
		$('#mak-15 p').text('3990');
		$('#mak-30 p').text('6990');
	});
});