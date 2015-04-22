head.ready(function() {

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

		var slideHeight = $('.swiper-container .slide__in').height();
		var wrapper = $('.slider .swiper-wrapper');
		var slideWrap = $('.slider .swiper-slide');

		wrapper.css('height', slideHeight);
		slideWrap.css('height', slideHeight);

	}

	sliderHeight();

	$(window).resize(function(){
		sliderHeight();
	})

});