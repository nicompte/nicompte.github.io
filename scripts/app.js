// Google analytics
(function (i, s, o, g, r, a, m) {
  'use strict';
  i.GoogleAnalyticsObject = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  },
  i[r].l = 1 * new Date();
  a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-41369793-1', 'barbotte.net');
ga('require', 'displayfeatures');
ga('send', 'pageview');

$(function () {
  'use strict';

  $('body').scrollspy({ target: '#nav.navbar' });

  $('a[href*=#]:not([href=#])').click(function () {

    ga('send', 'event', 'menu', 'click', $(this).html());

    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.links a').on('click', function () {
    ga('send', 'event', 'link', 'click', $(this).attr('title'));
  });

});
