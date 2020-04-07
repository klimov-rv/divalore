function scroll() {
  if ($(this).scrollTop() > 130) {
    $(".header-wrapper").addClass("scrolled")
  } else {
    $(".header-wrapper").removeClass("scrolled")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", scroll);
  window.addEventListener("scroll", scroll);
});

document.getElementById("no-flip").addEventListener("webkitTransitionEnd", showStaticBanner);

document.getElementById("no-flip").addEventListener("transitionend", showStaticBanner);

function showStaticBanner() {
  this.classList.add("transitionend");
}

var swiperMain = new Swiper('.main-slider', {
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  speed: 1300,
  slidesPerView: 1,
  spaceBetween: 110,
  loop: true,
  centeredSlides: true,
  loopAdditionalSlides: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      effect: 'slide',
      spaceBetween: 0,
    },
    1280: {
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
    },
  },

});


var garderobSlider = new Swiper('.garderob-slider', {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  loopAdditionalSlides: 4,
  lazy: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    460: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
}); 

swiperMain.on('slideChange', function (e) {
  $(".swiper-button-prev").hide();
  $(".swiper-button-next").hide();
  swiperMain.on('transitionEnd', function (e) {
    $(".swiper-button-prev").show();
    $(".swiper-button-next").show();
  });
}); 

  var tabSlider = new Swiper('#tabSlider',  { 
    slidesPerView: 'auto', 
    loop: false,    
    touchRatio: 0.2, 
    slideToClickedSlide: false
  });
  var slider1 = new Swiper('#tab-0',  { 
    slidesPerView: 4,
    spaceBetween: 10,
    loop: false, 
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false, 
      }, 
      420: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false, 
      }, 
      900: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false, 
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: false, 
      }
    }
  }); 

  var slider2 = new Swiper('#tab-1',  { 
    slidesPerView: 4,
    spaceBetween: 10,
    loop: false, 
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false, 
      }, 
      420: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false, 
      }, 
      900: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false, 
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: false, 
      }
    }
  }); 

  var slider3 = new Swiper('#tab-2',  { 
    slidesPerView: 4,
    spaceBetween: 10,
    loop: false,
    loopAdditionalSlides: 4,
    lazy: true, 
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false, 
      }, 
      420: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false, 
      }, 
      900: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false, 
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: false, 
      }
    }
  }); 

  var slider4 = new Swiper('#tab-3',  { 
    slidesPerView: 4,
    spaceBetween: 10,
    loop: false, 
    lazy: true, 
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false, 
      }, 
      420: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false, 
      }, 
      900: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false, 
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: false, 
      }
    }
  }); 
 

  document.getElementById("defaultOpen").click();

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }  
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

$('select').each(function () {

  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('s-hidden');

  $this.wrap('<div class="select"></div>');

  $this.after('<div class="styledSelect"></div>');

  var $styledSelect = $this.next('div.styledSelect');

  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
    'class': 'options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');
  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('div.styledSelect.active').each(function () {
      $(this).removeClass('active').next('ul.options').hide();
    });
    $(this).toggleClass('active').next('ul.options').toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});

