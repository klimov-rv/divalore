

//	Mmenu
var menu = new MmenuLight(
  document.querySelector('#menu'),
  'all'
);

var navigator = menu.navigation({ 
});

var drawer = menu.offcanvas({ 
});

document.querySelector('a[href="#menu"]')
  .addEventListener('click', evnt => {
    evnt.preventDefault();
    drawer.open();
  });

//	шапка

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


//	кастомные селект оптионс

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
    if ($(this).closest(".select").has("#currency").length)  { 
      $(".curr__icon").removeClass("show");
      $(".curr_" + $(this).attr('rel')).addClass("show");
    }  
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
  });
  
  $listItems.click(function (e) {
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});
  
$(".divaloreHeader__icon.search").click(function () {
  $(".search_widget").addClass("search_opened"); 
});
$(".search_widget .close").one("click", function(event) {
  $(".search_widget").removeClass("search_opened"); 
});