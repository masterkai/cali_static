$(function () {
  $('.gameCardGroup__mobile--quarter .gameCard--quarter').each((index, obj)=>{
    $(obj).on('click',()=>{
      let $this = $(obj);
      if($this.hasClass('active')) {
        return;
      }

      $('.gameCardGroup__mobile--quarter .gameCard--quarter').removeClass('active');
      $this.addClass('active');
    })
  })
})