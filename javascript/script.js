$(document).ready(function () {
  var pagetop = $('#pagetop');
  var menu = $('#menu');
  var menuButton = $('#menu-btn');

  document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  $(window).resize(function () {
    document.documentElement.clientWidth;
    if (windowWidth == window.innerWidth) {
      return;
    }

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    if (windowWidth <= 640) {
      menu.css('display', 'none');
    }
    else {
      menu.css('display', 'block');
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      pagetop.fadeIn();
    }
    else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
  });

  menuButton.click(function () {
    menu.slideToggle('slow');
  });
});

//GoogleAnalytics
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    },
    i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-84301135-1', 'auto');
ga('send', 'pageview');