$(function () {
  let lastTab = 0;
  const desc = ['卡利存取款簡易有效率，存款5分鐘完成、取款30分鐘內到帳！', '若需取款只需聯繫客服提供資料即可辦理。'];
  $('#accessProcessGroup,#accessProcessGroupM ').each(function () {
    let $tabList = $(this).find('.accessProcessTabs__container'),
      $tabAnchors = $tabList.find('.tab'),
      $tabPanels = $(this).find('.accessProcessPanel');

    $tabAnchors.each(function (currentTab,obj) {
      $(obj).on('click', function (e) {
        $('.bannerContent .desc').text(desc[currentTab]);
        e.preventDefault();
        // console.log($tabPanels.eq(currentTab));
        $tabPanels.eq(lastTab).css({display: 'none'});
        $tabPanels.eq(currentTab).css({display: 'flex'});
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