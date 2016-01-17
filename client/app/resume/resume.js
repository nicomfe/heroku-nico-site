'use strict';

angular.module('herokuNicoApp').config(function ($routeProvider) {
  $routeProvider.when('/resume', {
    url: '/resume',
    templateUrl: 'app/resume/resume.html',
    controller: 'ResumeCtrl'
  });
});
