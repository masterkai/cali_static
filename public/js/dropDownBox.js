$(function () {
  const state = {
    clicked: false
  }
  $('.itemContainer').on('click', function () {
    state.clicked = !state.clicked;
    if (state.clicked) {
      $(this).find('.icon_chevron-down-light').addClass('icon_chevron-up-light')
      $(this).find('.itemContent').css('display','flex')
      $(this).find('.dropDownBox').addClass('active')
    } else {
      $(this).find('.icon_chevron-down-light').removeClass('icon_chevron-up-light')
      $(this).find('.itemContent').css('display','none')
      $(this).find('.dropDownBox').removeClass('active')

    }
  })
})