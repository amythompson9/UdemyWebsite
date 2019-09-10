$(document).ready(function(){
  //sticky header
  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function(){
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

  //Masonry
  $('.grid').masonry({
    //options
    itemSelector: '.grid-item',
    columnWidth: 120,
    fitWidth: true,
    gutter: 0
  });

  //SLICK Slider
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    centerMode: true,
    slidesToShow: 3,
    //fade: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
  });
});
