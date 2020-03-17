$(function () {
  $('.itemContainer').find('.icon_chevron-down-light').on('click', function () {
    // $(this).find('.dropDownBox').toggleClass('active')
    console.log($(this).parent().parent('.itemContainer').find('.dropDownBox').toggleClass('active'));
  })
})