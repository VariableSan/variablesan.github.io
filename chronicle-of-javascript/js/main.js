// ready to start
$(() => {
	const showModalBtn = $('.show-modal-btn'),
				modal = $('#modal'),
				modalBtn = $('#modalBtn'),
				modalImg = $('#modalImg'),
				body = $('body')


	// offLinksProperty()	
	activeHeadBurger()
	// particlesEffect()
	showModalWindow(magnificStatImg)
	anchorToSection()
	// magnificStatImg()
	usesSlider()


	function offLinksProperty(){
		$('a[href = "#"]').on('click', (e) => {
			e.preventDefault()
		})
	}


	function activeHeadBurger(){
		$('.header__button').on('click', function() {
			$('.header__burger').toggleClass('header__burger_active')
			$('.header__items').slideToggle(300)
		})
	}

	function particlesEffect(){
		particlesJS.load('particles-js', './../js/particles.json', function() {
		  console.log('callback - particles-.js config loaded');
		})
	}

	function showModalWindow(callback){
		showModalBtn.on('click', function() {
			modal.addClass('modal--shown').show()
			body.addClass('hidden-scroll')
			let image = $(this).prevAll('*[data-image]').css('background-image')
			$('#modalImg').css('background-image', image)
			$('#modalTitle').text($(this).prev().children('*[data-title]').text())
			$('#modalContent').text($(this).prev().children('*[data-subtitle]').text())
			$('#modalSecret').html($(this).prev().children('*[data-secret]').html())
			callback()
		})
		modalBtn.on('click', function () {
			modal.removeClass('modal--shown').hide()
			body.removeClass('hidden-scroll')
		})
	} 

	function anchorToSection(){
		$('*[href^="#"]').on('click', function() {
			let target = $(this).attr('href')
			$('body, html').animate({
				scrollTop: $(target).offset().top
			}, 800)
		});
	}

	function magnificStatImg(){
		$('.statistics__secret-img').magnificPopup({
			type:'image',
			mainClass: 'mfp-with-zoom',
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it
				duration: 300, // duration of the effect, in milliseconds
			}
		})
	}

	function usesSlider() {
		$('.uses__slider').slick({
			mobileFirst: true,
			arrows: false,
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 4000,
			waitForAnimate: false
		})
	}

})