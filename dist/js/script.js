"use strict";

var myMap,
    myPlacemark,
    slider = tns({
  container: ".slider",
  items: 1,
  slideBy: "page",
  mouseDrag: !0,
  autoplay: !1
}),
    carpetsSlider = tns({
  container: "#carpetsSlider",
  items: 1,
  slideBy: "page",
  mouseDrag: !1,
  navContainer: ".thumbnails",
  navAsThumbnails: !0,
  autoplay: !1
}),
    toggle = function toggle() {
  document.querySelector(".mobile-controls__burger").addEventListener("click", function (e) {
    e.preventDefault(), this.classList.toggle("close"), document.getElementById("expandedMenu").classList.toggle("hide"), [].map.call(document.querySelectorAll(".bottom-menu"), function (e) {
      e.classList.toggle("active");
    });
  });
};

function drop(e, t) {
  document.getElementById(e).classList.toggle("show"), document.getElementById(t).classList.toggle("show");
}

function hideDrop(e, t) {
  document.getElementById(e).classList.remove("show"), document.getElementById(t).classList.remove("show");
}

function disableButtons() {
  [].map.call(document.querySelectorAll(".checkout__count"), function (e) {
    "1" === e.innerHTML ? e.previousElementSibling.setAttribute("disabled", !0) : e.previousElementSibling.removeAttribute("disabled");
  });
}

function searchFilter() {
  var input,
      filter,
      content,
      search,
      searchItems,
      i,
      counter = 0,
      result;
  input = document.getElementById('search-filter');
  filter = input.value.toUpperCase();
  content = document.getElementById("search-content");
  searchItems = content.getElementsByClassName('checkout__listitem');
  search = content.getElementsByClassName('list-item');
  result = document.getElementById('not-found-list');

  for (i = 0; i < search.length; i++) {
    if (search[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      searchItems[i].style.display = "";
    } else {
      searchItems[i].style.display = "none";
      counter += 1;
    }

    if (search.length === counter) {
      result.style.display = "";
    } else {
      result.style.display = "none";
    }
  }
}

function openTab(e, t, n) {
  var l, o, c;

  for (o = document.getElementsByClassName(n), l = 0; l < o.length; l++) {
    o[l].style.display = "none";
  }

  if (e) {
    for (c = document.getElementsByClassName("toggle-button"), l = 0; l < c.length; l++) {
      c[l].className = c[l].className.replace(" active", "");
    }

    document.getElementById(t).style.display = "block", e.currentTarget.className += " active";
  }

  if (t === 'tab1') {
    document.getElementById('dilveryType').innerText = 'Выберите адрес самовывоза в городе';
  } else {
    document.getElementById('dilveryType').innerText = 'Выберите службу доставки в город';
  }
}

function sortBy(e, t) {
  var n, l, o, c, s, a, i;

  for (n = document.getElementById("sort-list"), o = !0; o;) {
    for (o = !1, c = n.getElementsByClassName("popular-carpets__card"), s = n.getElementsByClassName("popular-carpets__price-main"), l = 0; l < s.length - 1; l++) {
      i = !1;
      var d = Number(s[l].innerHTML.toLowerCase().slice(0, -2).replace(/ /g, "")),
          m = Number(s[l + 1].innerHTML.toLowerCase().slice(0, -2).replace(/ /g, ""));

      if ("low" === t && d > m) {
        i = !0;
        break;
      }

      if ("high" === t && m > d) {
        i = !0;
        break;
      }
    }

    i && (c[l].parentNode.insertBefore(c[l + 1], c[l]), o = !0);
  }

  if (e) {
    for (a = document.getElementsByClassName("toggle-button"), l = 0; l < a.length; l++) {
      a[l].className = a[l].className.replace(" active", "");
    }

    e.currentTarget.className += " active";
  }
}

function validate(e) {
  e.value ? e.classList.remove("showError") : e.classList.add("showError");
}

toggle(), document.getElementById("toggleTextTitle") && document.getElementById("toggleTextTitle").addEventListener("click", function () {
  this.classList.toggle("top"), document.getElementById("toggleText").classList.toggle("hide");
}), document.getElementById("coupon") && (document.getElementById("coupon").addEventListener("click", function () {
  document.getElementById("couponRow").classList.toggle("hide");
  document.getElementById("couponInput").focus();
  this.classList.toggle("hide");
}), document.getElementById("hideCoupon").addEventListener("click", function () {
  document.getElementById("couponRow").classList.toggle("hide"), document.getElementById("coupon").classList.toggle("hide");
}), document.getElementById("couponApply").addEventListener("click", function () {
  document.getElementById("couponRow").classList.toggle("hide"), document.getElementById("couponAppled").classList.toggle("hide"), [].map.call(document.querySelectorAll(".checkout__item-price"), function (e) {
    e.classList.toggle("coupon");
  });
})), disableButtons(), [].map.call(document.querySelectorAll(".add-item"), function (e) {
  e.addEventListener("click", function () {
    var e = parseFloat(this.previousElementSibling.innerHTML);
    this.previousElementSibling.innerHTML = e + 1, disableButtons();
  });
}), [].map.call(document.querySelectorAll(".remove-item"), function (e) {
  e.addEventListener("click", function () {
    var e = parseFloat(this.nextElementSibling.innerHTML);
    this.nextElementSibling.innerHTML = e - 1, disableButtons();
  });
}), [].map.call(document.querySelectorAll(".selectCity span"), function (e) {
  e.addEventListener("click", function () {
    this.parentNode.classList.toggle("open");
  });
}), [].map.call(document.querySelectorAll(".selectCity-modal__accept"), function (e) {
  e.addEventListener("click", function () {
    this.parentNode.parentNode.parentNode.classList.toggle("open");
  });
}), [].map.call(document.querySelectorAll(".selectCityChange"), function (e) {
  e.addEventListener("click", function () {
    this.parentNode.parentNode.classList.toggle("newCity");
  });
}), [].map.call(document.querySelectorAll(".closeNewCity"), function (e) {
  e.addEventListener("click", function () {
    this.parentNode.parentNode.classList.toggle("newCity");
  });
}), jQuery(function (e) {
  e("#list-phone").mask("+7 (999) 999-99-99"), e("#modalPhone").mask("+7 (999) 999-99-99");
}), document.getElementById("order") && document.getElementById("order").addEventListener("click", function () {
  [].map.call(document.querySelectorAll(".validateInput"), function (e) {
    e.value ? e.classList.remove("showError") : e.classList.add("showError");
  });

  for (var e = !0, t = 0; t < document.getElementsByName("check-list").length; t++) {
    if (document.getElementsByName("check-list")[t].checked) {
      e = !0;
      break;
    }

    e = !1;
  }

  e ? document.getElementById("delivery").classList.remove("show") : document.getElementById("delivery").classList.add("show");
});

function setMapScroll() {
  console.log($(window).width());

  if ($(window).width() > 1023 - 17) {
    $(window).scroll(function () {
      // console.log($(window).scrollTop(), $('#map').offset().top, $('#contactsPosition').height());
      if ($(window).scrollTop() >= $('#mapPosition').offset().top) {
        var deltha = $(window).scrollTop() - $('#mapPosition').offset().top;
        var maxScrollValue = $('#contactsPosition').height() - ($(window).scrollTop() - $('#contactsPosition').offset().top);
        console.log(maxScrollValue - 160, $('#map').height());

        if (maxScrollValue - 160 > $('#map').height()) {
          $('#map').attr('style', 'transform: translateY(' + deltha + 'px);');
        }
      } else {
        $('#map').attr('style', 'transform: translateY(0px);');
      }
    });
  } else {
    $(window).unbind('scroll');
    $('#map').removeAttr('style');
  }
}

if (document.getElementById('map')) {
  var init = function init() {
    myMap = new ymaps.Map("map", {
      center: center,
      zoom: 15
    }), myPlacemark = new ymaps.Placemark(placemarkPoint, {
      hintContent: "Москва!",
      balloonContent: "Столица России"
    }), myMap.geoObjects.add(myPlacemark);
  };

  ymaps.ready(init);
  var center = [55.76, 37.64],
      placemarkPoint = [55.76, 37.64];
  setMapScroll();
  $(window).resize(function () {
    setMapScroll();
  });
}

function swapElements(obj1, obj2) {
  var temp = document.createElement("div");
  obj1.parentNode.insertBefore(temp, obj1);
  obj2.parentNode.insertBefore(obj1, obj2);
  temp.parentNode.insertBefore(obj2, temp);
  temp.parentNode.removeChild(temp);
}

var togglemap1 = false;
var togglemap2 = true;
document.getElementById("cross-close") && document.getElementById("cross-close").addEventListener("click", function () {
  document.getElementById("map").classList.remove("show");
});
document.getElementById("sabbiButton") && document.getElementById("sabbiButton").addEventListener("click", function () {
  document.getElementById("map").classList.toggle("show");
  myPlacemark.geometry.setCoordinates([55.69587, 37.664896]);
  myMap.panTo([55.69587, 37.664896], {
    flying: !0
  });
  document.getElementById("sabbiButton").innerHTML = 'На карте';
  document.getElementById("kiddieWorld").innerHTML = 'Показать на карте';
  document.getElementById("kiddieWorld").classList.remove('contacts__address-map-button');
  document.getElementById("kiddieWorld").classList.add('contacts__address-map-button-transparent');
  document.getElementById("sabbiButton").classList.remove('contacts__address-map-button-transparent');
  document.getElementById("sabbiButton").classList.add('contacts__address-map-button');

  if (togglemap1) {
    swapElements(document.getElementById("map"), document.getElementById("map-mobile-2"));
    document.getElementById("map").classList.add("show");
    togglemap1 = false;
    togglemap2 = true;
  }
}), document.getElementById("kiddieWorld") && document.getElementById("kiddieWorld").addEventListener("click", function () {
  document.getElementById("map").classList.toggle("show");
  myPlacemark.geometry.setCoordinates([52.51253, 85.17341]);
  myMap.panTo([52.51253, 85.17341], {
    flying: !0
  });
  document.getElementById("kiddieWorld").innerHTML = 'На карте';
  document.getElementById("sabbiButton").innerHTML = 'Показать на карте';
  document.getElementById("sabbiButton").classList.remove('contacts__address-map-button');
  document.getElementById("sabbiButton").classList.add('contacts__address-map-button-transparent');
  document.getElementById("kiddieWorld").classList.remove('contacts__address-map-button-transparent');
  document.getElementById("kiddieWorld").classList.add('contacts__address-map-button');

  if (togglemap2) {
    swapElements(document.getElementById("map"), document.getElementById("map-mobile-2"));
    document.getElementById("map").classList.add("show");
    togglemap1 = true;
    togglemap2 = false;
  }
}), [].map.call(document.querySelectorAll(".showBackCall"), function (e) {
  e.addEventListener("click", function () {
    document.getElementById("backCallModal").classList.toggle("show");
  });
}), document.getElementById("sendBackCall") && document.getElementById("sendBackCall").addEventListener("click", function () {
  var e = !0;
  [].map.call(document.querySelectorAll(".back-call-modal__main .validateInput"), function (t) {
    t.value ? t.classList.remove("showError") : (e = !1, t.classList.add("showError"));
  }), e && (document.getElementById("modalInputs").classList.toggle("hide"), document.getElementById("modalTnx").classList.toggle("show"));
}), [].map.call(document.querySelectorAll(".modal-close-button"), function (e) {
  e.addEventListener("click", function () {
    document.getElementById("backCallModal").classList.toggle("show");
  });
});

if (document.getElementById('zoom')) {
  document.getElementById('zoom').addEventListener('click', function () {
    this.parentNode.classList.toggle('zoom');
  });
}

if (document.getElementById('changeSide')) {
  document.getElementById('changeSide').addEventListener('click', function () {
    if (this.classList.contains('back')) {
      document.getElementById('cardPhoto').setAttribute('style', 'background-image: url(img/carpet-preview.jpg)');
    } else {
      document.getElementById('cardPhoto').setAttribute('style', 'background-image: url(img/carpet-preview-back.jpg)');
    }

    this.classList.toggle('back');
  });
}

$('.carpets-slider__slide').click(function () {
  console.log(this);

  if ($(this).hasClass('tns-slide-active') && !$(this).hasClass('fancybox-content')) {
    $.fancybox.open({
      src: $(this).clone(),
      type: 'inline'
    });
  }
});