(function ($) {
  'use strict';

// declare actors here
  const $fanBIngBing = $('.fanBIngBing'),
    $startingPlayMobile = $('.startingPlayMobile'),
    $head = $('.fanBingBing .head'),
    $closedEye = $('.eye_closed'),
    $body = $('.fanBingBing .body'),
    $elbow = $('.fanBingBing .elbow'),
    $pokerCoin = $('.fanBingBing .pokerCoin')

  ;


  // clear stage
  function clearStage() {
    let clearTl = new TimelineMax()
    ;

    clearTl
      .set($fanBIngBing, {autoAlpha: 0})
      .set($body, {autoAlpha: 1})
      .set($elbow, {autoAlpha: 1})
      .set($closedEye, {autoAlpha: 0})
      .set($pokerCoin, {autoAlpha: 0, scale: 0.5})
      .set($head, {autoAlpha: 1, onComplete: showContainer})


    ;

    function showContainer() {
      $startingPlayMobile.css('display', 'flex');

    }

    return clearTl;
  }

  // enter stuff
  function enterStuff() {
    const stuffTl = new TimelineMax();
    stuffTl
      .to($fanBIngBing, 2, {scale: 1.2, autoAlpha: 0}, 0.02)
      .to($head, 2, {transformOrigin: '60px 94px 0', onComplete:startBlinking})
      .to($pokerCoin, 10, {scale: 1.2, autoAlpha: 1, transformOrigin: 'center'}, 0.02)
      .to($elbow, 2, {transformOrigin: '9.5px 104px 0', autoAlpha: 1, onComplete: bowElbow})
      .to($body, 2, {autoAlpha: 1, onComplete: bowTheHead}, 0.02);


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
      const birdBlinkTl = new TimelineMax({repeat:-1,repeatDelay:2})
      birdBlinkTl
        .set($closedEye, {autoAlpha: 1})
        .set($closedEye, {autoAlpha: 0}, '+=0.2')
        .set($closedEye, {autoAlpha: 1},'+=1.2')
        .set($closedEye, {autoAlpha: 0},'+=0.2')
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