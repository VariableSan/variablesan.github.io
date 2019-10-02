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