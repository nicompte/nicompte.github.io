// Google analytics stuff
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
ga('send', 'pageview');


$(function(){

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
})

// Angular app init
var app = angular.module('barbotte', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  'use strict';
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {templateUrl: '/views/home.html'})
  .when('/:route/:subroute', {
    templateUrl: function (options) {
      return '/views/' + options.route + '_' + options.subroute + '.html';
    }
  }
  )
  .when('/:route', {
    templateUrl: function (options) {
      return '/views/' + options.route + '.html';
    }
  }
 )
  .otherwise({redirectTo: '/'});
}]);

app.controller('MenuCtrl', function ($scope, $location) {
  'use strict';

  $scope.isActive = function (route) {
    var reg = new RegExp(route + '.*');
    return reg.test($location.path()) ? 'active' : '';
  };
  $scope.toggleMenu = function () {
    $scope.boolChangeClass = !$scope.boolChangeClass;
  };
  $scope.openSubmenu = function (selectedItem) {
    $scope.selected = $scope.selected === selectedItem ? '' : selectedItem;
  };
  if($scope.isActive('/skills') !== "") $scope.openSubmenu('skills');
});

app.controller('MainCtrl', function ($scope, $location, $window, $rootScope) {
  'use strict';
  $window.ga('send', 'pageview', $location.path());
  $rootScope.boolChangeClass = false;
  //$rootScope.$apply();
});

app.directive('submenulink', function () {
  'use strict';
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      elem.bind('click', function (event, $scope) {
        $scope.selected = $scope.selected === 'skills' ? '' : 'skills';
      });
    }
  };
});

app.directive('link', function () {
  'use strict';
  return {
    restrict: 'A',
    link: function (scope, elem, attrs, $location) {
    }
  };
});
