$('.accordion .tabs').each(function (index, target) {
  $(target).click(function () {
    $('.accordion .tabs').removeClass('active')
    $(this).addClass('active')
  })
});