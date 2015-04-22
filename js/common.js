head.ready(function() {

	//main slider
	var swiper = $('.swiper-container').swiper({
		speed: 800,
		loop: true,
		keyboardControl: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		calculateHeight: true,
		cssWidthAndHeight: true
	});

	function sliderHeight(){

		var slideHeight = $('.slider .swiper-container .slide__in').height();
		var wrapper = $('.slider .swiper-wrapper');
		var slideWrap = $('.slider .swiper-slide');

		wrapper.css('height', slideHeight);
		slideWrap.css('height', slideHeight);

	}

	sliderHeight();

	//on resize
	$(window).resize(function(){

		sliderHeight();

		if($(window).width() > 800){
			$('.mobile-menu').removeClass('is-active');
		}
		$(".product__ttl").dotdotdot({
			ellipsis: "..."
		});

	});

	//mobile menu
	$('.js-open').click(function(){
		$('.mobile-menu').addClass('is-active');
		$('body').addClass('is-hidden');
	});

	$('.js-close').click(function(){
		$('.mobile-menu').removeClass('is-active');
		$('body').removeClass('is-hidden');
	});

	//technichal details
	$('.js-click').click(function(i){
		i.preventDefault();
		$(this).find('.arr_ico').toggleClass('is-active');
		$('.tech').slideToggle();
	});

	//text overflow in products
	$(".product__ttl").dotdotdot({
		ellipsis: "..."
	});


});