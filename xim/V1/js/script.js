"use strict";

$(document).ready(function () {
  ;

  var setSuccessItemsCount = function setSuccessItemsCount() {
    var count = $('.success-desc__items .success-desc__row-subtitle').length;
    $('.success-desc__row-show-more').text('и ещё ' + (count - 1) + ' товаров');
  };

  setSuccessItemsCount();

  var setItemsCount = function setItemsCount() {
    var count = $('.ordering__item-container').find('.ordering-container__item').length;
    $('.hide-or-show-items').text('Показать все (' + count + ') товары в корзине');
  };

  $('.success-desc__row-show-more').click(function () {
    $('.success-desc__items').toggleClass('show');

    if ($('.success-desc__items').hasClass('show')) {
      $('.success-desc__row-show-more').text('Скрыть');
    } else {
      setSuccessItemsCount();
    }
  });
  setItemsCount();
  $('.catalog-filter__price-input').on('input', function (e) {
    var parent = $(e.target).parent();
    var classname = parent.attr('class').replace('catalog-filter__price-input-wrapper ', '');

    if (e.target.value) {
      if (!$('.catalog-filter__price-input-container').hasClass(classname)) {
        $('.catalog-filter__price-input-container').addClass(classname);
      }
    } else {
      $('.catalog-filter__price-input-container').removeClass(classname);
    }

    var formValues = $('.catalog-filter__container').serializeArray().filter(function (el) {
      return el.value;
    });

    if (formValues.length) {
      if (!$('#filtersCount').hasClass('active')) {
        $('#filtersCount').addClass('active');
      }

      $('#filtersCount').html(formValues.length);
    } else {
      $('#filtersCount').html('');
      $('#filtersCount').removeClass('active');
    }
  });
  $('.hide-or-show-items').click(function () {
    $('.ordering__item-container').toggleClass('show');

    if ($('.ordering__item-container').hasClass('show')) {
      $('.hide-or-show-items').text('Скрыть');
    } else {
      setItemsCount();
    }
  });
  $('.restore__button').click(function () {
    $(this).parent().parent().parent().toggleClass('removing');
  });
  $('.ordering-item-basket').click(function () {
    $(this).parent().parent().toggleClass('removing');
  });
  $('.ordering-item__add').click(function () {
    var inp = $(this).parent().find('.ordering-item__count');
    inp.val(+inp.val() + 1);
  });
  $('.ordering-item__remove').click(function () {
    var inp = $(this).parent().find('.ordering-item__count');
    inp.val(+inp.val() - 1 < 0 ? 0 : +inp.val() - 1);
  });
  $('.open-menu-button__icon').click(function () {
    $('.open-menu-button').toggleClass('openned');
    $('.expanded-menu').toggleClass('show');
    $('.expanded-catalog').removeClass('show');

    if ($('.expanded-menu').hasClass('show')) {
      $('.expanded-catalog__splash').addClass('show');
    } else {
      $('.choose-city__popup').removeClass('openned');
      $('.expanded-catalog__splash').removeClass('show');
    }
  });
  $('.selectCityChange').click(function () {
    $('.selectCity-modal').addClass('newCity');
  });
  $('.closeNewCity').click(function () {
    $('.choose-city__popup-wrapper').removeClass('newCity');
  });
  $('.catalog-item__button').click(function () {
    $('.add-to-card').toggleClass('show');

    if (!$('.expanded-catalog__splash').hasClass('show')) {
      $('.expanded-catalog__splash').addClass('show');
    }
  });
  $('.close-add-to-card').click(function () {
    $('.add-to-card').removeClass('show');
    $('.expanded-catalog__splash').removeClass('show');
  });
  $('.close-backcall').click(function () {
    $('.backcall-popup').removeClass('show');
    $('.open-menu-button').removeClass('openned');
    $('.expanded-menu').removeClass('show');
    $('.expanded-catalog__splash').removeClass('show');
  });
  $('.expanded-menu__backcall-button').click(function () {
    $('.backcall-popup').toggleClass('show');
    $('.expanded-catalog').removeClass('show');
    $('.expanded-catalog__splash').removeClass('show');
    $('.expanded-catalog__splash').addClass('show');
  });
  $('.menu__backcall-button').click(function () {
    $('.backcall-popup').toggleClass('show');
    $('.expanded-catalog').removeClass('show');
    $('.choose-city__popup').removeClass('openned');
    $('.expanded-catalog__splash').removeClass('show');
    $('.expanded-catalog__splash').addClass('show');
  });
  $('.choose-city__popup-button').click(function () {
    $('.choose-city__popup').removeClass('openned');
    $('.expanded-catalog__splash').removeClass('show');
  });
  $('.expanded-menu__location').click(function () {
    $('.choose-city__popup').addClass('openned');
  });
  $('.show-recomended-products').click(function () {
    $('.recommendation__container-col').addClass('active');
  });
  $('.add-to-card-splash').click(function () {
    $('.add-to-card').removeClass('show');
    $('.expanded-catalog__splash').removeClass('show');
  });
  $('.product-page-add-to-card').click(function () {
    $('.add-to-card').addClass('show');
    $('.expanded-catalog__splash').addClass('show');
  });
  $('.expanded-catalog__splash').click(function () {
    $(this).removeClass('show');
    $('.choose-point-popup').removeClass('show');
    $('.choose-city__popup').removeClass('openned');
    $('.backcall-popup').removeClass('show');
    $('.expanded-menu').removeClass('show');
    $('.expanded-catalog').removeClass('show');
    $('.catalog-button').removeClass('active');
    $('.open-menu-button').removeClass('openned');
  });
  $('.choose-city__popup-change-city').click(function () {
    $('.choose-city__popup-wrapper').addClass('newCity');
  });
  $('.menu__city').click(function () {
    $('.choose-point-popup').removeClass('show');

    if (!$('.choose-city__popup').hasClass('openned')) {
      $('.choose-city__popup').addClass('openned');

      if (!$('.expanded-catalog__splash').hasClass('show')) {
        $('.expanded-catalog__splash').addClass('show');
      }
    } else {
      $('.choose-city__popup').removeClass('openned');

      if ($('.expanded-catalog__splash').hasClass('show')) {
        $('.expanded-catalog__splash').removeClass('show');
      }
    }
  });
  $('.search-input-mobile').focus(function () {
    $(this).toggleClass('active');
    $('.search-results-container').toggleClass('active');
    $('.search-input-mobile-container').toggleClass('active');
  });
  $('.close-search-input-container').click(function () {
    $('.search-input-mobile').removeClass('active');
    $('.search-results-container').removeClass('active');
    $('.search-input-mobile-container').removeClass('active');
  });

  if ($(window).width() < 1023) {
    $('.expanded-catalog__menu-text.active').removeClass('active');
  }

  $(".expanded-catalog__menu-text").click(function () {
    if ($(window).width() > 1023) {
      if (!$(this).hasClass('active')) {
        $('.expanded-catalog__menu-text.active').removeClass('active');
        $('.expanded-catalog-items.active').removeClass('active');
        var count = this.className.split('expanded-catalog__menu-text ')[1];
        $('.expanded-catalog__menu-text.' + count).addClass('active');
        $('.expanded-catalog-items.' + count).addClass('active');
      }
    } else {
      var count = this.className.replace('active', '').replace('expanded-catalog__menu-text', '').trim();
      var lastActive = '';

      if ($('.expanded-catalog__menu-text.active')[0]) {
        lastActive = $('.expanded-catalog__menu-text.active')[0].className.replace('active', '').replace('expanded-catalog__menu-text', '').trim();
        $($('.expanded-catalog__menu-text.active').next()).slideToggle();
        $('.expanded-catalog__menu-text.active').removeClass('active');
      }

      if (count !== lastActive) {
        $(this).toggleClass('active');
        $($(this).next()).slideToggle();
      }
    }
  });
  $('#resetAll').click(function name() {
    $('.catalog-filter__container')[0].reset();
    $('.catalog-filter').removeClass('active');
    $('.catalog-filter__list').removeClass('active');
    $('#filtersCount').html('');
    $('#filtersCount').removeClass('active');
    priceSlider.slider('values', 0, priceSlider.slider("option", "min"));
    priceSlider.slider('values', 1, priceSlider.slider("option", "max"));
  });
  $('.reset-filter').click(function (e) {
    var parent = $(this).parent().parent();
    var inputs = parent.find('input');
    inputs.each(function (index) {
      $(inputs[index]).prop('checked', false);
    });
    var formValues = $('.catalog-filter__container').serializeArray().filter(function (el) {
      return el.value;
    });

    if (!formValues.length) {
      $('#filtersCount').html('');
      $('#filtersCount').removeClass('active');
      $('.catalog-filter').removeClass('active');
    } else {
      if (!$('#filtersCount').hasClass('active')) {
        $('#filtersCount').addClass('active');
      }

      $('#filtersCount').html(formValues.length);
    }

    parent.removeClass('active');
  });
  $('.catalog-filter__container').change(function (e) {
    if ($(e.target).parent().parent()[0].nodeName === 'UL') {
      var inputs = $(e.target).parent().parent().find('input');
      var activeInputs = inputs.serializeArray().filter(function (el) {
        return el.value === 'on';
      });

      if (activeInputs.length) {
        if (!$('#filtersCount').hasClass('active')) {
          $('#filtersCount').addClass('active');
        }

        $('#filtersCount').html(activeInputs.length);

        if (!inputs.prevObject.hasClass('active')) {
          inputs.prevObject.addClass('active');
        }
      } else {
        inputs.prevObject.removeClass('active');
      }
    }

    var elems = $(this).serializeArray().filter(function (el) {
      return el.value;
    });

    if (elems.length) {
      if (!$('.catalog-filter').hasClass('active')) {
        $('.catalog-filter').addClass('active');
      }
    }
  });
  $('#catalogButton').click(function () {
    $(this).toggleClass('active');
    $('.choose-city__popup').removeClass('openned');
    $('.backcall-popup').removeClass('show');
    $('.open-menu-button').removeClass('openned');
    $('.expanded-menu').removeClass('show');

    if (!$('.expanded-catalog').hasClass('show')) {
      $('.expanded-catalog').addClass('show');
      $('.expanded-catalog__splash').addClass('show');
    } else {
      $('.expanded-catalog').removeClass('show');
      $('.expanded-catalog__splash').removeClass('show');
    }
  });
  $('.packs-button').click(function () {
    if (!$(this).hasClass('active')) {
      var itemPrice = $(this).parent().parent().find('.item-price');
      var itemPriceLast = $(this).parent().parent().find('.item-price-last');
      var itemPriceDiscount = $(this).parent().parent().find('.item-price-discount');
      itemPrice.html('200 руб.');
      itemPriceLast.html('200 руб.');
      itemPriceDiscount.html('— 20%');
      $(this).parent().find('button').removeClass('active');
      $(this).addClass('active');
    }
  });
  $('.product-size__type').click(function () {
    if (!$(this).hasClass('active')) {
      $('.product-size__type').removeClass('active');
      $(this).addClass('active');
      $('.product-size').find('span').html($(this).find('.product-size__weight').html());
    }
  });
  var priceSlider = $('.price-slider').slider({
    range: true,
    min: 0,
    max: 10000,
    values: [0, 10000],
    slide: function name(event, ui) {
      if (ui.handleIndex === 0) {
        $('#priceFrom').val(ui.value);
      } else {
        $('#priceTo').val(ui.value);
      }

      if (!$('.catalog-filter').hasClass('active')) {
        $('.catalog-filter').addClass('active');
      }

      var formValues = $('.catalog-filter__container').serializeArray().filter(function (el) {
        return el.value;
      });

      if (formValues.length) {
        if (!$('#filtersCount').hasClass('active')) {
          $('#filtersCount').addClass('active');
        }

        $('#filtersCount').html(formValues.length);
      } else {
        $('#filtersCount').html('');
        $('#filtersCount').removeClass('active');
      }
    }
  });
  $('.ordering-form__button').click(function (e) {
    e.preventDefault();

    if (!$(this).hasClass('active')) {
      $('.ordering-form__button').removeClass('active');
      $(this).addClass('active');
    }
  });
  $('.choose-point-popup__container-close').click(function () {
    $('.choose-point-popup').removeClass('show');
    $('.expanded-catalog__splash').removeClass('show');
  });
  $('.ordering-form__schedule-cancel').click(function () {
    if (!$('.choose-point-popup').hasClass('show')) {
      $('.choose-point-popup').addClass('show');
      $('.expanded-catalog__splash').addClass('show');
    }
  });
  $('#priceFrom').change(function (e) {
    priceSlider.slider('values', 0, e.target.value);
  });
  $('#priceTo').change(function (e) {
    priceSlider.slider('values', 1, e.target.value);
  });
  $('.catalog-filter-close').click(function () {
    $('.catalog-filter').removeClass('show');
  });
  $('#showFilter').click(function () {
    $('.catalog-filter').toggleClass('show');
  });
  $('.catalog-sort-menu__button').click(function () {
    $('.catalog-sort-menu__button').removeClass('active');
    $('.catalog-sort-selected').html($(this).html());
    $(this).addClass('active');
  });
  $('#catalogSortMenu').click(function () {
    $(this).toggleClass('active');

    if (!$('.catalog-sort-menu__container').hasClass('hide')) {
      $('.catalog-sort-menu__container').addClass('hide');
    } else {
      $('.catalog-sort-menu__container').removeClass('hide');
    }
  });
  $('#backToTopButton').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });
  setTimeout(function () {
    var productPageSlider = tns({
      container: '.product-slider',
      items: 1,
      controls: false,
      navContainer: "#productSliderNav",
      mode: 'gallery'
    });
    $('.product-slider__slide').click(function () {
      var str = this.style.backgroundImage.split('url(')[1];
      var url = str.substring(1, str.length - 2);
      $.fancybox.open([{
        src: url
      }]);
    });
    tns({
      container: ".sale-slider",
      items: 1,
      slideBy: "page",
      mouseDrag: !0,
      navContainer: "#saleSliderNavs",
      autoplay: !1
    });
    var firsPageSliders = [];
    $('.common-slider').each(function () {
      var slider = tns({
        items: 4,
        mouseDrag: !0,
        navAsThumbnails: !0,
        autoplay: !1,
        controlsText: ['', ''],
        container: this,
        responsive: {
          1024: {
            mouseDrag: !1
          }
        }
      });
      firsPageSliders.push(slider);
    });
    $('.common-slider-pagination').each(function (index) {
      if (firsPageSliders[index]) {
        $(this).find('.second-number').append(Math.floor(firsPageSliders[index].getInfo().slideCount / firsPageSliders[index].getInfo().items));
      }
    });
    $('.product-desc-show-more').click(function () {
      $(this).parent().toggleClass('active');

      if ($(this).parent().hasClass('active')) {
        $('.product-desc-show-more').html('Скрыть');
      } else {
        $('.product-desc-show-more').html('Ещё...');
      }
    });
    firsPageSliders.forEach(function (elem, index) {
      if (elem) {
        elem.events.on('transitionEnd', function (info) {
          var page = 1 + Math.trunc(info.navCurrentIndex / info.items);
          var pagination = $('.common-slider-pagination')[index];
          $(pagination).find('.first-number').html(Math.floor(page));
        });
      } else {
        if (!$($('.common-slider-pagination')[index]).hasClass('d-none')) {
          !$($('.common-slider-pagination')[index]).addClass('d-none');
        }
      }
    });
  }, 0);
});