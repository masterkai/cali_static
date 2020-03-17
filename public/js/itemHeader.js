$(function () {
  $('.itemContainer').find('.itemHeader').click(function () {
    // alert('clicked!!')
    $(this).parent().find('.itemContent').toggleClass('active')
  })
})