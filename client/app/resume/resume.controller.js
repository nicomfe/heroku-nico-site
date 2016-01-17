'use strict';

angular.module('herokuNicoApp').controller('ResumeCtrl', function ($scope, ResumeFactory) {
  $scope.technologies = ResumeFactory.getTechnologies();
  $scope.workExperience = ResumeFactory.getWorkExperience();
  $scope.certifications = ResumeFactory.getCertifications();
  $scope.educations = ResumeFactory.getEducations();
});
