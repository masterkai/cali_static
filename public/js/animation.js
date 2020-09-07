(function ($) {
  'use strict';

// declare actors here
  const
    $startingPlayMobile = $('.startingPlayMobile'),
    $HomeBtn = $('.home'),
    $front = $('.home .front'),
    $back = $('.home .back');


  // clear stage
  function clearStage() {
    let clearTl = new TimelineMax()
    ;

    clearTl
      .set($HomeBtn, {autoAlpha: 1})
      .set($front, {scale: .75, autoAlpha: 1, rotationY: 0})
      .set($back, {scale: .5, autoAlpha: 0, rotationY: -180, onComplete: showContainer})
    ;

    function showContainer() {
      $startingPlayMobile.css('display', 'flex');
      $HomeBtn.css('display', 'block');

    }

    return clearTl;
  }

  // enter stuff
  function enterStuff() {
    const stuffTl = new TimelineMax();
    stuffTl

      .to($HomeBtn, .5, {autoAlpha: 1}, -0.25)
      .to($front, 1, {scale: 1, autoAlpha: 1, rotationY: 0, ease: Power4.easeInOut, onComplete: homeBtnFliping}, 0.02)
      .to($back, 2, {scale: .05, autoAlpha: 0, rotationY: 180}, 0.02)
    ;


    function homeBtnFliping() {
      const flipHomeTl = new TimelineMax({repeat: -1});
      flipHomeTl
        .to($front, 3, {scale: 1, autoAlpha: 1, rotationY: 0, ease: Power4.easeInOut}, '-=0.002')
        .to($front, 1.5, {scale: .5, autoAlpha: 0, rotationY: 180, ease: Power4.easeInOut})
        .to($back, 3, {scale: 1, autoAlpha: 1, rotationY: 0, ease: Power4.easeInOut}, '-=1.9')
        .to($back, 1.5, {scale: .5, autoAlpha: 0, rotationY: 180, ease: Power4.easeInOut})
        .to($front, .5, {scale: 1, autoAlpha: 1, rotationY: 0}, '-=0.8')
    }


    return stuffTl
  }

  // the GO function ...to kick things all off
  function go() {
    console.log('go...');

    let masterTl = new TimelineMax();

    masterTl
      .add(clearStage(), 'scene-clear-stage')
      .add(enterStuff(), 'scene-enter-stuff')

    ;
  }

  go();

})(jQuery);