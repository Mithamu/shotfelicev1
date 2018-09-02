(function() {
  $(function() {
    var pagetop;
    $(window).load(function() {
      return $("#cover").fadeOut();
    });
    pagetop = $('#page_top');
    pagetop.hide();
    return $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        return pagetop.fadeIn(400);
      } else {
        return pagetop.fadeOut(400);
      }
    });
  });

}).call(this);
