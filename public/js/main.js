$(function () {
  $('.mainCarousel').slick({
    lazyLoad: 'progressive',
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false
        }
      }
    ]
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
  });

  const header = document.querySelector('#header');
  const topOfHeader = header.offsetTop;
  function fixNav() {
    if(window.scrollY >= topOfHeader) {
      document.body.classList.add('fixed-nav')
    }else {
      document.body.classList.remove('fixed-nav')
    }
  }

  window.addEventListener('scroll', fixNav)
});

