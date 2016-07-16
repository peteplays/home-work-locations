require('ngmap/build/scripts/ng-map.min');
require('angular-animate/angular-animate.min');
require('angular-ui-bootstrap/dist/ui-bootstrap-tpls');
require('./js/autocomplete.min.js');
require('angular-scroll/angular-scroll.min.js');

var theApp = angular.module('theApp', [
        'ui.bootstrap',
        'ngAnimate',
        'ngMap',
        'google.places',
        'duScroll'
    ])
    .controller('hwl', require('./js/main.js'));
