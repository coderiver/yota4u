head.ready(function() {

	//main slider
	var swiper = $('.main-slider').swiper({
		speed: 800,
		loop: true,
		keyboardControl: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		calculateHeight: true,
		cssWidthAndHeight: true,
		paginationClickable: true
	});

	//quote slider
	var mySwiper = new Swiper('.quote-slider', {
		speed: 800,
		loop: true,
		nextButton: '.button-next',
		prevButton: '.button-prev',
		pagination: '.pagination',
		paginationClickable: true
	});

	function slideHeight(slider, slideIn) {

        var slider = $(slider),
            slides = slider.find(slideIn).toArray();

            function getMaxOfArray(numArray) {
               return Math.max.apply(null, numArray);
            }

            function setSliderHeight() {

            	var heightArr = [];
                $(slides).each(function(index, el) {
                    heightArr.push( $(el).height() );
                });

                var maxHeight = getMaxOfArray(heightArr);
                slider.height(maxHeight);
            }

            setSliderHeight();
            $(window).resize(setSliderHeight);

    }

	slideHeight('.main-slider', '.slide__in');
	slideHeight('.quote-slider', '.slide-quote');

	//on resize
	$(window).resize(function(){

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

	//video
	$('.video_ico').click(function(i){

		i.preventDefault();
		$(this).parent().hide();

	});

});