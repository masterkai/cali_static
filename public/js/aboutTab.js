$(function () {
  let lastTab = 0;

  $('#aboutTab,#aboutTabMobile').each(function () {
    let $tabList = $(this).find('.tabsBox'),
      $tabAnchors = $tabList.find('.tab'),
      $tabPanels = $(this).find('.itemBox');

    $tabAnchors.each(function (currentTab,obj) {
      $(obj).on('click', function (e) {
        e.preventDefault();
        // console.log($tabPanels.eq(currentTab));
        $tabPanels.eq(lastTab).css({display: 'none'});
        $tabPanels.eq(currentTab).css({display: 'flex'});
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