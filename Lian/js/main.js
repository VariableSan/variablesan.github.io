$(document).ready(function() {
	$('a[href^="#"]').on('click', function(event) {
		event.preventDefault();
	});

	$('#nav-slider').slick({
		dots: true,
		prevArrow: ".left__arrow",
		nextArrow: ".right__arrow",
		fade: true,
		waitForAnimate: false
	});

	$('.right__arrow').on('click', function() {
		$(this).toggleClass('right__arrow_active');
	});
});