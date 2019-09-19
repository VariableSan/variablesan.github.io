$(() => {

	// выключает дурацкую дефолтную функцию ссылок
	$(`.header-block a[href^='#']`).on('click', function(event) {
		event.preventDefault()
	})

	let navSlider = new MySlider({
		images: '.nav-slider__img',
		prevBtn: '.nav-slider_prevBtn',
		nextBtn: '.nav-slider_nextBtn',
		miniImg: '.second-nav__img'
	})

	descriptionTitle()
	descriptionSubtitle()
	featuresSubtitle()

	function descriptionTitle(){
		let sliderTitle = $('.nav-slider__title')
		for(let i = 0; i < sliderTitle.length; i++){
			sliderTitle.eq(i).text(`Slide #${i+1}`)
		}
	}

	function descriptionSubtitle(){
		let sliderSubtitle = $('.nav-slider__subtitle')
		for(let i = 0; i < sliderSubtitle.length; i++){
			sliderSubtitle.eq(i).text('Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea.')
		}
	}

	function featuresSubtitle(){
		let transform = $('.features__subtitle')
		for(let i = 0; i < transform.length; i++){
			transform.eq(i).text('Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies.')
		}
	}

})