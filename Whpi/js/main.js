$(() => {

	offShit()
	navSliderOn()
	sectionNewsSlider()
	advHoverEffect(clickOnBigAdvBG)
	hideSupportBtn()

	

	/*==================== offShit START====================*/
	/**
	 * [description]
	 * выключает зло*чий "#" в адресной строке при нажатии 
	 * на ссылки начинающие на #
	 */
	function offShit(){
		$('a[href="#"]').on('click', (e) => {
			e.preventDefault()
		})
	}
	/*==================== offShit END====================*/



	/*==================== navSliderOn START====================*/
	/**
	 * [navSliderOn description]
	 * slick slider в second-nav-slider
	 */
	function navSliderOn(){
		let secondNavSlider = $('.second-nav-slider')
		secondNavSlider.slick({
			speed: 650,
			cssEase: "ease-in-out",
			prevArrow: $('.second-nav_left'),
			nextArrow: $('.second-nav_right'),
			adaptiveHeight: true,
			dots: true,
			appendDots: $('.second-nav .slider-dots'),
			waitForAnimate: true,
		})
	}
	/*==================== navSliderOn END====================*/




	/*==================== news slider START====================*/
	/**
	 * [sectionNewsSlider description]
	 * @return {null} добавляет слайдер в секцию news
	 */
	function sectionNewsSlider() {
		let newsSlider = $('.news__items')
		newsSlider.slick({
			rows: 2,
			slidesPerRow: 2,
			prevArrow: $('.news_left'),
			nextArrow: $('.news_right')
		})
	}
	/*==================== news slider END====================*/




	/*==================== advHoverEffect START====================*/
	/**
	 * [advHoverEffect description]
	 * @param  {function} callback это колбэк для 
	 * clickOnBigAdvBG
	 * добавляет к advantages__workshop hover
	 * эффект, а также cursor делает pointer
	 */
	function advHoverEffect(clickOnBigAdvBG){
		let advWorkShop = $('.advantages__workshop'),
				advLength = advWorkShop.length,
				advBig = $('.advantages__big')

		for(let i = 0; i < advLength; i++){
			if(i != 0 && i != advLength - 1){
				$(advWorkShop[i]).hover(function() {
					$(this).addClass('advantages_shown')
				}, function() {
					$(this).removeClass('advantages_shown')
				})
				$(advWorkShop[i]).css('cursor', 'pointer')
				clickOnBigAdvBG(advWorkShop, i, advBig)
			}
		}
	}
	/*==================== advHoverEffect END====================*/




	/*==================== clickOnBigAdvBG START====================*/
	/**
	 * [clickOnBigAdvBG description]
	 * @param  {array} array надо передать массив
	 * @param  {int} index надо передать индекс
	 * @param  {obj} bgImg надо передать dom элемент с переключаемыми
	 * картинками
	 * @return {null} добавляет к элементам advWorkShop класс clicked
	 * при нажатии на них
	 * применяется в функции advHoverEffect()
	 *
	 * @2 функция заменяет background у advBig
	 */
	function clickOnBigAdvBG(array, index, bgImg) {
		// первый элемент по дефолту имеет 1 background,
		// а также класс adv_Clicked
		$(array[1]).addClass('advantages_clicked')
		$(bgImg).css({
			'background-image': `url(../img/advantages/big-background-1.jpg)`,
			'background-repeat': 'no-repeat'
		})

		let elements = $('.advantages__second-el')
		$(elements[0]).addClass('advantages_displayed')

		// при клике также сменяется bg-image
		$(array[index]).on('click', function() {
			$(this).addClass('advantages_clicked').siblings().removeClass('advantages_clicked')
			$(bgImg).css({
				'background-image': `url(../img/advantages/big-background-${index}.jpg)`,
				'background-repeat': 'no-repeat',
				'background-attachment': 'fixed'
			})
			$(elements[index - 1]).addClass('advantages_displayed').siblings().removeClass('advantages_displayed')
		})
	}
	/*==================== clickOnBigAdvBG END====================*/


	/*==================== hideSupportBtn START====================*/
	/**
	 * [hideSupportBtn description]
	 * @return {null} при скролле вниз появляется кнопка поддержки
	 * support-btn
	 */
	function hideSupportBtn(){
		$(window).on('scroll', function() {
			if($(this).scrollTop() > 400){
				$('.support-btn').css('display', 'block')
			}
			else 
				$('.support-btn').css('display', 'none')
		})
	}
	/*==================== hideSupportBtn END====================*/


}) // window.onload