// Native JavaScript
/*$(document).ready(function() {
	let button = document.querySelector('#button');
	let modal = document.querySelector('#modal');
	let close = document.querySelector('#close');

	button.addEventListener('click', function(e) {
		modal.classList.add('modal_active');
	});

	close.addEventListener('click', function(e) {
		modal.classList.remove('modal_active');
	});
});*/


// Jquery
$(document).ready(function() {
	let button = $('#button');
	let modal = $('#modal');
	let close = $('#close');

	button.on('click', function() {
		modal.addClass('modal_active');
	});

	close.on('click', function () {
		modal.removeClass('modal_active');
	});

	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.arrows__left'),
		nextArrow: $('.arrows__right'),
		responsive: [
			{
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
		]
	});

	/*WOW.js init*/
	new WOW().init();
});