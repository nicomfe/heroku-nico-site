'use strict';

angular.module('herokuNicoApp').config(function ($routeProvider) {
  $routeProvider.when('/projects', {
    url: '/projects',
    templateUrl: 'app/projects/projects.html',
    controller: 'ProjectsCtrl'
  });
});
