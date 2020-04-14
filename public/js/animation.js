(function ($) {
  'use strict';

// declare actors here
  const $fanBIngBing = $('.fanBIngBing'),
    $startingPlayMobile = $('.startingPlayMobile'),
    $head = $('.fanBingBing .head'),
    $raysBG = $('.raysBG'),
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
      .set($elbow, {autoAlpha: 0})
      .set($raysBG, {autoAlpha: 0})
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
      .to($head, 2, {transformOrigin: '60px 114px 0'}, 0.02)
      .to($pokerCoin, 10, {scale: 1.2, autoAlpha: 1, transformOrigin: 'center'}, 0.02)
      .to($elbow, 2, {transformOrigin: '9.5px 104px 0', autoAlpha: 1, onComplete: bowElbow}, 0.02)
      .to($body, 2, {autoAlpha: 1, onComplete: bowTheHead}, 0.02)
      // .to($raysBG, 2, {scale: 1, autoAlpha: 1, onComplete: zoomRay},0.02)


    function bowTheHead() {
      const bowHeadTl = new TimelineMax({repeat: -1, repeatDelay: 2.5});
      bowHeadTl
        .to($head, 2, {rotation: -2, ease: Power4.easeInOut})
        .to($head, 2, {rotation: 2, ease: Power4.easeInOut})
        .to($head, 2, {rotation: -2, ease: Power4.easeInOut})
        .to($head, 2, {rotation: 2, ease: Power4.easeInOut})
        .to($head, 2, {rotation: 0, ease: Power4.easeInOut})
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

    function zoomRay() {
      const zoomRayTl = new TimelineMax({repeat: -1})
      zoomRayTl
        .to($raysBG, 2, {scale: .6, autoAlpha: .2, rotation: -10, ease: Power4.easeInOut})
        .to($raysBG, 2, {scale: 1.2, autoAlpha: 1, rotation: 10, ease: Power4.easeInOut})
        .to($raysBG, 2, {scale: .6, autoAlpha: .2, rotation: -20, ease: Power4.easeInOut})
        .to($raysBG, 2, {scale: 1.0, autoAlpha: 1, rotation: 10, ease: Power4.easeInOut})
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