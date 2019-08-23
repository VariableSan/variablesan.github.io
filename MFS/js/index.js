$(document).ready(function(){
	/**
	 * [Shows page scrolling at the top]
	 */
	$(window).scroll(function() {
		let ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
		$("#progress").width(ratio + "%");
	});


	/**
	 * [Allows you to go to the home page without a link]
	 */
	let arrowBack = $('#backToMainPage');
	arrowBack.on('click', function() {
		history.back();		
	});

	/**
	 * Smooth anchor scrolling
	 */
	$('a[href^="#"]').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 750);
	});
});