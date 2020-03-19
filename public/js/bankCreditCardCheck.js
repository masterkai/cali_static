$(function () {
  $('#bankCreditCardCheck').each(function () {
    let $formChecks = $(this).find('.form-check [type=radio]')
    $formChecks.each(function (i, obj) {

      $(obj).on('click',function () {
        // console.log('index',i);
        // console.log('obj',obj);
        $formChecks.attr('checked',false);
        $(this).attr('checked', true);
        $('.form-check').css('border','none')
        $(this).parent().css('border','1px solid white')

      })
    })
  })
})