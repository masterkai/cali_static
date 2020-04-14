$(function () {
  $('.mainCarousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.bonusCarousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.hotPostCarousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  })
});

