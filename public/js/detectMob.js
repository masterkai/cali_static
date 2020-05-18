
detectMob();
function detectMob() {
  // return ( ( window.innerWidth <= 500 ) && ( window.innerHeight <= 850 ) );
  // console.log(window.innerWidth);
  if(window.innerWidth===411){
    $('#player-container').css('bottom','-165px');
    $('#player-container--sport').css('bottom','-155px');
  }else {
    return;
  }
}