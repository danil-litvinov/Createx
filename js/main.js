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
  });

  $('.team__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.team__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })
})