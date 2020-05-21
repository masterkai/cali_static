$(function () {
  let lastTab = 0;

  $('.franchise').each(function () {
    let $tabList = $(this).find('.franchise__Nav .centralize'),
      $tabAnchors = $tabList.find('.franchise__btnTitle'),
      $tabPanels = $(this).find('.panelGroup .panel');

    $tabAnchors.each(function (currentTab,obj) {
      $(obj).on('click', function (e) {
        e.preventDefault();
        // console.log($tabPanels.eq(currentTab));
        $tabPanels.eq(lastTab).css({display: 'none'});
        $tabPanels.eq(currentTab).css({display: 'block'});
        lastTab = currentTab;

        // Add active class to the tab which was clicked!!
        let $this = $(obj);
        // console.log($this.attr('href'));
        if($this.hasClass('active')) {
          return;
        }

        $tabAnchors.removeClass('active');
        $this.addClass('active');

      });
    });


    $tabAnchors.eq(0).trigger('click');
  });
});