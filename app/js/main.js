$(function () {

  


  // MENU
  $('.ham').on('click', function(){
    $('.nav').slideToggle();
  })



  $('.team__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          fade: true,
        }
      },
    ]
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
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.work__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: '<button type="button" class="work__arrow work-prev">prev</button>',
    nextArrow: '<button type="button" class="work__arrow work-next">next</button>',
    responsive: [
      {
        breakpoint: 830,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  $('.related__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 1,
          fade: true,
        }
      },
    ]
  });

  



  
  
  var mixer = mixitup('.works__inner, .blog__inner');

});