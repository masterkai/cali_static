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
    $lebron = $('.lebron'),
    $lebronRH = $('.lebron_RH'),
    $lebronLH = $('.lebron_LH'),
    $chips = $('.play02_2 .chips'),
    $poker = $('.poker'),
    $Jackpot = $('.Jackpot'),
    $fbb = $('.fbb'),
    $chessChips = $('.play06 .chips'),
    $chessPoker = $('.play06 .card01'),
    $man = $('.play06 .man'),
    $beauty = $('.play06 .beauty'),
    $Mahjong = $('.play06 .Mahjong'),
    $lotteryTicket01 = $('.lotteryTicket01'),
    $lotteryTicket02 = $('.lotteryTicket02'),
    $ColoredBalls_N3 = $('.ColoredBalls_N3'),
    $ColoredBalls_N5 = $('.ColoredBalls_N5'),
    $coins = $('.coins'),
    $shark = $('.shark'),
    $rocket = $('.rocket'),
    $nimo = $('.nimo')

  ;


  // clear stage
  function clearStage() {
    let clearTl = new TimelineMax()
    ;

    clearTl
      .set($fanBIngBing, {autoAlpha: 0})
      .set($fbb, {x: 0, y: 280, autoAlpha: 1})
      .set($lebron, {y: 0, autoAlpha: 0})
      .set($lebronRH, {transformOrigin: '24.375px 11.401px 0'})
      .set($lebronLH, {transformOrigin: '7.438px 13.937px 0'})
      .set($lotteryTicket01, {x: 0, y: 0, autoAlpha: 0})
      .set($lotteryTicket02, {x: 0, y: 0, autoAlpha: 0})
      .set($ColoredBalls_N3, {x: 0, y: 0, autoAlpha: 0})
      .set($ColoredBalls_N5, {x: 0, y: 0, autoAlpha: 0})
      .set($shark, {y: 0, autoAlpha: 0})
      .set($rocket, {y: 0, autoAlpha: 0})
      .set($nimo, {y: 0, autoAlpha: 0})
      .set($coins, {x: 0, y: 0, autoAlpha: 0})
      .set($beauty, {x: 0, y: 0, autoAlpha: 0})
      .set($man, {x: 0, y: 0, autoAlpha: 0})
      .set($Mahjong, {y: 0, autoAlpha: 0})
      .set($chessChips, {rotation: 0, autoAlpha: 0})
      // .set($roulette, {scale: .25, rotation: 0, autoAlpha: 0})
      .set($chips, {scale: .2, autoAlpha: 0})
      // .set($poker, {scale: .2, autoAlpha: 0})
      .set($Jackpot, {scale: .25, autoAlpha: 0})
      .set($HomeBtn, {autoAlpha: 1})
      .set($front, {scale: .75, autoAlpha: 1, rotationY: 0})
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
      .to($fbb, .5, {x: 0, y: 280, autoAlpha: 1},'-=0.5')
      .to($lebron, 1, {y: 0, autoAlpha: 1}, -2)
      .to($lotteryTicket01, 1, {y: 0, autoAlpha: 1}, -2)
      .to($lotteryTicket02, 1, {y: 0, autoAlpha: 1}, -2)
      .to($ColoredBalls_N3, 1, {y: 0, autoAlpha: 1}, -2)
      .to($ColoredBalls_N5, 1, {y: 0, autoAlpha: 1}, -2)
      .to($shark, 1, {y: 0, autoAlpha: 1}, -2)
      .to($rocket, 1, {y: 0, autoAlpha: 1}, -2)
      .to($nimo, 1, {y: 0, autoAlpha: 1}, -2)
      .to($coins, 1, {y: 0, autoAlpha: 1}, -2)
      .to($beauty, 1, {x: 0, y: 0, autoAlpha: 1}, -2)
      .to($man, 1, {x: 0, y: 0, autoAlpha: 1}, -2)
      .to($chessChips, 1, {rotation: 0, autoAlpha: 1}, -2)
      .to($Mahjong, 1, {y: 0, autoAlpha: 1, onComplete: mahjong}, -2)
      // .to($roulette, 2, {scale: 1, rotation: 720, autoAlpha: 1}, -2)
      .to($chips, 2, {scale: 1, autoAlpha: 1}, -2)
      // .to($poker, 2, {scale: 1, autoAlpha: 1, ease: Power4.easeInOut}, -2)
      .to($Jackpot, 2, {scale: .85, autoAlpha: 1}, -2)
      .to($fanBIngBing, 2, {scale: 1.0, autoAlpha: 1}, 0.02)
      .to($HomeBtn, .5, {autoAlpha: 1}, -0.25)
      .to($front, 1, {scale: 1, autoAlpha: 1, rotationY: 0, ease: Power4.easeInOut, onComplete: homeBtnFliping}, 0.02)
      .to($back, 2, {scale: .05, autoAlpha: 0, rotationY: 180}, 0.02)
      .to($head, 2, {transformOrigin: '60px 94px 0', onComplete: startBlinking})
      .to($pokerCoin, 10, {scale: 1.2, autoAlpha: 1, transformOrigin: 'center'}, 0.02)
      .to($elbow, 2, {transformOrigin: '9.5px 104px 0', autoAlpha: 1, onComplete: bowElbow})
      .to($body, 2, {autoAlpha: 1, onComplete: bowTheHead}, 0.02)

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

    // function lebron() {
    //   const lebronTl = new TimelineMax({repeat: -1, repeatDelay: 5});
    //   lebronTl
    //     .fromTo($lebronH1, 1, {autoAlpha: 1}, {autoAlpha: 0, duration: 3})
    //
    //     .fromTo($lebronH2, 1, {autoAlpha: 1, ease: Power4.easeInOut, duration: 16}, {autoAlpha: 0}, '+=3.2')
    //     .to($lebronH1, 1, {autoAlpha: 1}, '-=1.2')
    //
    // }

    function mahjong() {
      const flipHomeTl = new TimelineMax();
      flipHomeTl
        .to($Mahjong, 3, {y: 0, autoAlpha: 1, ease: Power4.easeInOut})
        .to($Mahjong, 1, {y: 100, autoAlpha: 0, ease: Power0.easeInOut})
        .to($Mahjong, 1, {y: 0, autoAlpha: 1, ease: Power4.easeInOut})
    }

    // function electronics() {
    //   const electronicTl = new TimelineMax({repeat: -1, repeatDelay: 2.5});
    //   electronicTl
    //     .to($roulette, .5, {scale: 1, autoAlpha: 1, rotation: 0, ease: Power4.easeInOut}, '-=0.002')
    //     .to($Jackpot, 1.5, {scale: .75, autoAlpha: 1, ease: Power4.easeInOut}, '-=0.002')
    //     .to($poker, 3, {scale: .75, autoAlpha: 0, ease: Power4.easeInOut}, '-=0.6')
    //     .to($chips, 1, {scale: .25, autoAlpha: 0, ease: Power4.easeInOut}, '-=0.6')
    //     .to($Jackpot, 1.5, {scale: 1, autoAlpha: 1, ease: Power4.easeInOut}, '-=0.002')
    //     .to($poker, .5, {scale: 1, autoAlpha: 1, ease: Power4.easeInOut}, '-=0.002')
    //     .to($chips, 3, {scale: 1, autoAlpha: 1, ease: Power4.easeInOut}, '-=0.6')
    // }


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