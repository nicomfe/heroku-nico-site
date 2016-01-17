'use strict';

angular.module('herokuNicoApp').config(function($routeProvider) {
   $routeProvider.when('/', {
    templateUrl: 'app/main/main.html',
    controller: 'MainController'
  });
});
