'use strict';

angular.module('herokuNicoApp').controller('GetInTouchCtrl', function ($scope, emailService) {
  $scope.sendEmail = function(){
    emailService.sendEmail($scope.contactModel).then(function(response){
      console.log(response);
    }).catch((err) => {
      console.warn(err);
    });
  };
});
