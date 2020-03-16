$(function () {
  let lastTab = 0;

  $('.switch').each(function () {
    let $tabList = $(this).find('.switchBox'),
      $tabAnchors = $tabList.find('.tab'),
      $tabPanels = $(this).find('.formPanel');

    $tabAnchors.each(function (currentTab,obj) {
      $(obj).on('click', function (e) {
        e.preventDefault();
        // console.log($tabPanels.eq(currentTab));
        $tabPanels.eq(lastTab).css({display: 'none'});
        $tabPanels.eq(currentTab).css({display: 'block'});
        lastTab = currentTab;
        // console.log('lastTab:'+lastTab+' ,currentTab:'+currentTab+' ,obj:'+$(obj).attr('href'));

        // Add active class to the tab which was clicked!!
        let $this = $(obj);
        // console.log($this.attr('href'));
        if($this.hasClass('active')) {
          return;
        }

        $tabAnchors.removeClass('active');
        $this.addClass('active');

        // $tabPanels.css('display', 'none');
        // $($this.attr('href')).css('display', 'block');
      });
    });


    $tabAnchors.eq(0).trigger('click');
  });
});