$(function () {

  $('.slider-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    variableWidth: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/index/arrowbefore.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/index/arrowafter.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.articles-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    dots: true,
    variableWidth: true,
    arrows: false,
   
    responsive: [
      {
        breakpoint: 320,
        settings: {
          dots:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.slider-inner-about').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 800,

    variableWidth: true,
    arrows: true,
    prevArrow: false,
    focusOnSelect: true,
    nextArrow: '<button type="button" class="slick-next"><img src="img/about/arrow_slider.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/about/arrow_slider.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          dots: true,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.slider-portfolio-inner').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    autoplay: true,
    nextArrow: '<button type="button" class="slick-next"><img src="img/about/arrow_slider.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/about/arrow_slider.svg" alt=""></button>',
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.service-item.one').on('click', function () {
    $('.service-hidden-info').slideToggle();
  });
  $('.arrow').on('click', function () {
    $('.bread').toggleClass('active');
  });
  $('.burger-menu').on('click', function () {
    
    $('.menu-list').toggleClass('active');
  });
});