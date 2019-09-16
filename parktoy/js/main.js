$(document).ready(function(){

	// Карусель изображений на карточке товара
	var owl = $('.goods-carousel');
	$(".goods-carousel").owlCarousel({
		margin: 30,
		dots: true,
		items: 1,
		dotsClass: 'goods-slider__dots',
		dotClass: 'goods-slider__dot'
	});

	$('.goods-slider__right').click(function() {
	    $(this).siblings('.goods-carousel').trigger('next.owl.carousel', [300]);
	})
	// Go to the previous item
	$('.goods-slider__left').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    $(this).siblings('.goods-carousel').trigger('prev.owl.carousel', [300]);
	});


	// Карусель отзывов в екстра блоке
	$(".extra-reviews-carousel").owlCarousel({
		margin: 30,
		dots: true,
		items: 1,
		dotsClass: 'extra-reviews__dots',
		dotClass: 'extra-reviews__dot'
	});

	$('.extra-reviews__arrow--right').click(function() {
	    $(".extra-reviews-carousel").trigger('next.owl.carousel', [300]);
	})
	// Go to the previous item
	$('.extra-reviews__arrow--left').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    $(".extra-reviews-carousel").trigger('prev.owl.carousel', [300]);
	});


	// Фильтр в каталоге
	var filterButton = $('#filter-button');

	if (filterButton.length > 0) {
		$(".catalog-filter__body").hide();
		filterButton.click(function() {
		    $(".catalog-filter__heading").toggleClass("catalog-filter__heading--active");
		    $(".catalog-filter__body").slideToggle('fast');
		})
        
    }


    // Плюс и минус в корзине
    $('.card-amount__minus').click(function() {
    	var value = $(this).siblings('.card-amount__value').val();
    	if (value != 1) {
    		value--
	    	$(this).siblings('.card-amount__value').val(value);
    	}
    	
	});

	$('.card-amount__plus').click(function() {
	    var value = $(this).siblings('.card-amount__value').val();
	    value++;
	    $(this).siblings('.card-amount__value').val(value);
	});

});