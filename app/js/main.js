$(function () {

  $('.team__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
  });

  $('.testimonials__sliderTop').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonials__sliderBottom'
  });

  $('.testimonials__sliderBottom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.testimonials__sliderTop',
    dots: true,
    arrows: false,
    focusOnSelect: true
  });

  $('.work__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="work__arrow work-prev">prev</button>',
    nextArrow: '<button type="button" class="work__arrow work-next">next</button>',
  });

  $('.related__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });


  
  
  var mixer = mixitup('.works__inner, .blog__inner');

});