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
  const STPH = $('.stratingPlayMobile').height()
  console.log('STPH', STPH);
  console.log('windowHeight', windowHeight);
  const marqueeBoxH = $('.marqueeBox').height()
  const fixedTopH = $('.fixed-top').height()
  const mainCarouselH = $('.mainCarousel').height()
  const totalH = marqueeBoxH + fixedTopH + mainCarouselH
  if (STPH < windowHeight) {
    $('.stratingPlayMobile').height(STPH + 74 )
  } else if (windowHeight < 736 && windowHeight > 667) {
    $('.stratingPlayMobile').height(STPH + ($(window).height() - STPH ))
    alert(windowHeight)
  }
  // else {
  //   $('.stratingPlayMobile').height(STPH + 64 + mainCarouselH)
  // }
})