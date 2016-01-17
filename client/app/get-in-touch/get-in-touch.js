'use strict';

angular.module('herokuNicoApp').config(function ($routeProvider) {
  $routeProvider.when('/get-in-touch', {
    url: '/get-in-touch',
    templateUrl: 'app/get-in-touch/get-in-touch.html',
    controller: 'GetInTouchCtrl'
  });
});