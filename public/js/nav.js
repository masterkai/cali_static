$(function () {
  $('.menu,.DDW, .UPM,.UPS').hide();
  $('.menuToggle').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log($(this));
    if ($(this).next().hasClass('DDW')) {
      if (!$(this).hasClass('actived')) {
        $(this).removeClass('icon_chevron-down-light');
        $(this).addClass('icon_chevron-up-light');
        $(this).addClass('actived').next().show().addClass('actived');
      } else {
        $(this).removeClass('icon_chevron-up-light');
        $(this).addClass('icon_chevron-down-light');
        $(this).removeClass('actived').next().hide().removeClass('actived');
      }
    } else {
      if (!$(this).hasClass('actived')) {
        $(this).addClass('actived').next().show().addClass('actived');
      } else {
        $(this).removeClass('actived').next().hide().removeClass('actived');
      }
    }


    //$(this).addClass('actived').next().show().addClass('actived');
  });
  $('.menuToggle').on('mouseleave', function (e) {
    var tobj = $(this), teobj = $(e.relatedTarget);
    if ($(this).next().hasClass('DDW')) {
      $(this).removeClass('icon_chevron-up-light');
      $(this).addClass('icon_chevron-down-light');
    }

    if (!($(teobj).hasClass('actived') || $(teobj).hasClass('nav-menu-2') || $(teobj).parent().hasClass('nav-menu-2'))) {
      $(tobj).removeClass('actived').next().hide().removeClass('actived');
    }
  });

  $('.nav-menu-2').on('mouseleave', function (e) {
    var tobj = $(this), teobj = $(e.relatedTarget);
    if (!$(teobj).hasClass('actived')) {
      $(tobj).removeClass('actived').hide().prev().removeClass('actived');
    }
  });

  const overLay = document.getElementsByClassName('overlay');
  const UPS = $('.UPS');
  const $window = $(window)
  $window.on('click', e=>e.target.className === 'overlay'? UPS.hide(): false)
});