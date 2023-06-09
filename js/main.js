// Fancybox.bind("[data-fancybox]", {
//   // Your custom options
// });

$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    draggable: false,
    waitForAnimate: false,
    dots: true,
    appendDots: $('.team__dots'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        }
        },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.4,
          rifhtMode: true,
          centerMode: true,
        }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            rifhtMode: true,
            draggable: true,
            centerMode: true,
            draggable: true,
          }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.6,
              rifhtMode: true,
              draggable: true,
              centerMode: true,
            }
            },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.2,
            draggable: true,
            centerMode: true,
          }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              draggable: true,
            }
            }
      ]
  });

  $('.team__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.team__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
  })

  $('.testimonials__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })

  $('.testimonials__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    // $(this).toggleClass('program__acc-link--active')
    // $(this).children('.program__acc-text').slideToggle()
    if ($(this).hasClass('program__acc-link--active')) {
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
    }
    else {
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).addClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideDown()
    }
  })

  $('.header__logo, .header__nav-list a, .header__top-btn, .footer__top-link, .header__content-buttons a, .about__content-buttons a, .footer__bottom-link').on('click', function () {
  
    let href = $(this).attr('href');
    let data = $(this).attr('data-filter')
    if ($('.header__top').hasClass('header__top--open')) {
      $('.header__top').removeClass('header__top--open')
      $('.burger-menu').removeClass('burger-menu--active')
      $('.overlay').removeClass('overlay--show')
    }
    
  
    $('html, body').animate({
      scrollTop: $(href).offset().top - 70
    }, {
      duration: 800,   // по умолчанию «400» 
      easing: "swing" // по умолчанию «swing» 
    });

    if ($(this).attr('data-filter')) {
      $('.directions__filter-btn').removeClass('directions__filter-btn--active')
      $(`.directions__filter-btn[data-filter='${data}']`).addClass('directions__filter-btn--active')
    }
    else {
      return(false);
    }
  });

  setInterval(() => {
    if ($(window).scrollTop() > 0) {
      $('.burger-menu').addClass('burger-menu--follow')
    } else {
      $('.burger-menu').removeClass('burger-menu--follow')
    }
  }, 0);

  $('.burger-menu, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.burger-menu').toggleClass('burger-menu--active')
    $('.overlay').toggleClass('overlay--show')
  });

})
