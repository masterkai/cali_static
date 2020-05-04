(function ($) {
  'use strict';

// declare actors here
  const $fanBIngBing = $('.fanBIngBing'),
    $startingPlayMobile = $('.startingPlayMobile'),
    $head = $('.fanBingBing .head'),
    $closedEye = $('.eye_closed'),
    $body = $('.fanBingBing .body'),
    $elbow = $('.fanBingBing .elbow'),
    $pokerCoin = $('.fanBingBing .pokerCoin'),
    $HomeBtn = $('.home'),
    $front = $('.home .front'),
    $back = $('.home .back'),
    $baccarat = $('.play01 .title')

  ;


  // clear stage
  function clearStage() {
    let clearTl = new TimelineMax()
    ;

    clearTl
      .set($fanBIngBing, {autoAlpha: 0})
      .set($baccarat, {y: 200, autoAlpha: 0})
      .set($HomeBtn, {autoAlpha: 0})
      .set($front, {scale: .25, autoAlpha: 1, rotationY: 0})
      .set($back, {scale: .5, autoAlpha: 0, rotationY: -180})
      .set($body, {autoAlpha: 1})
      .set($elbow, {autoAlpha: 1})
      .set($closedEye, {autoAlpha: 0})
      .set($pokerCoin, {autoAlpha: 0, scale: 0.5})
      .set($head, {autoAlpha: 1, onComplete: showContainer})


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
      .to($baccarat, 1, {y: 0, autoAlpha: 1}, -2)
      .to($fanBIngBing, 2, {scale: 1.2, autoAlpha: 0}, 0.02)
      .to($HomeBtn, 2, {autoAlpha: 1}, 0.02)
      .to($front, 1, {scale: 1, autoAlpha: 1, rotationY: 0, ease: Power4.easeInOut, onComplete: homeBtnFliping}, 0.02)
      .to($back, 2, {scale: .05, autoAlpha: 0, rotationY: 180}, 0.02)
      .to($head, 2, {transformOrigin: '60px 94px 0', onComplete: startBlinking})
      .to($pokerCoin, 10, {scale: 1.2, autoAlpha: 1, transformOrigin: 'center'}, 0.02)
      .to($elbow, 2, {transformOrigin: '9.5px 104px 0', autoAlpha: 1, onComplete: bowElbow})
      .to($body, 2, {autoAlpha: 1, onComplete: bowTheHead}, 0.02);

    function homeBtnFliping() {
      const flipHomeTl = new TimelineMax({repeat: -1});
      flipHomeTl
        .to($front, 3, {scale: 1, autoAlpha: 1, rotationY: 0, ease: Power4.easeInOut}, '-=0.002')
        .to($front, 1.5, {scale: .5, autoAlpha: 0, rotationY: 180, ease: Power4.easeInOut})
        .to($back, 3, {scale: 1, autoAlpha: 1, rotationY: 0, ease: Power4.easeInOut}, '-=1.6')
        .to($back, 1.5, {scale: .5, autoAlpha: 0, rotationY: 180, ease: Power4.easeInOut})
        .to($front, .5, {scale: 1, autoAlpha: 1, rotationY: 0}, '-=0.002')
    }

    function bowTheHead() {
      const bowHeadTl = new TimelineMax({repeat: -1, repeatDelay: 2.5});
      bowHeadTl
        .to($head, 2, {rotation: -2, ease: Power4.easeInOut})
        .to($head, 2, {rotation: 2, ease: Power4.easeInOut})
        .to($head, 2, {rotation: -2, ease: Power4.easeInOut})
        .to($head, 2, {rotation: 2, ease: Power4.easeInOut})
        .to($head, 2, {rotation: 0, ease: Power4.easeInOut})
    }

    function startBlinking() {
      const birdBlinkTl = new TimelineMax({repeat: -1, repeatDelay: 5})
      birdBlinkTl
        .set($closedEye, {autoAlpha: 1})
        .set($closedEye, {autoAlpha: 0}, '+=0.2')
        .set($closedEye, {autoAlpha: 1}, '+=1.2')
        .set($closedEye, {autoAlpha: 0}, '+=0.2')
    }

    function bowElbow() {
      const bowElbowTl = new TimelineMax({repeat: -1, repeatDelay: 2.5})
      bowElbowTl
        .to($elbow, 2, {rotation: -2.5, ease: Power4.easeInOut})
        .to($elbow, 2, {rotation: 2.5, ease: Power4.easeInOut})
        .to($elbow, 2, {rotation: -5, ease: Power4.easeInOut})
        .to($elbow, 2, {rotation: 2.5, ease: Power4.easeInOut})
        .to($elbow, 2, {rotation: 0, ease: Power4.easeInOut})
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