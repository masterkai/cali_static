$(document).ready(function () {

  $('.onlineWithdraw').click(function (e) {
    e.preventDefault()
    $('.UPS').toggle()
  })
  const DDWalletState = {
    clicked: false
  }
  $('.DDWalletMobile').click(function (e) {
    e.preventDefault()
    DDWalletState.clicked = !DDWalletState.clicked
    if(DDWalletState.clicked){
      $('.DDWalletMobile span').addClass('icon_chevron-up-light')
    } else {
      $('.DDWalletMobile span').removeClass('icon_chevron-up-light')
    }
    $('.DDWallet').toggle()
  })
})