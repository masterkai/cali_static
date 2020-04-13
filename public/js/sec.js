$(function () {
  const userTestHeight = $('.userTest').height();
  // console.log('userTestHeight',userTestHeight);
  $('.userFeedBackBox').height(userTestHeight);

  if ($('.mobileBox_nobg').height() < $(window).height()) {
    $('.mobileBox_nobg').height($(window).height())
  } else {
    $('.mobileBox_nobg').css('height', 'auto')
  }
  const windowHeight = $(window).height()
  const STPH = $('.startingPlayMobile').height()
  const marqueeBoxH = $('.marqueeBox').height()
  const fixedTopH = $('.fixed-top').height()
  const mainCarouselH = $('.mainCarousel').height()
  const totalH = marqueeBoxH + fixedTopH + mainCarouselH
  const $startingPlay = document.getElementsByClassName('startingPlayMobile')
  // console.log($startingPlay[0].style.display==='flex');
  if (STPH < windowHeight && $startingPlay[0].style.display === 'flex') {
    $('.startingPlayMobile').height(STPH + 74)
  } else if (windowHeight < 736 && windowHeight > 667) {
    $('.startingPlayMobile').height(STPH + ($(window).height() - STPH))
  }
  // else {
  //   $('.stratingPlayMobile').height(STPH + 64 + mainCarouselH)
  // }
})