'use strict';

angular.module('herokuNicoApp').controller('GetInTouchCtrl', function ($scope, emailService) {
  $scope.hideMessage = false;
  $scope.sendEmail = function(){
    if($scope.contactForm && $scope.contactForm.$invalid){
      //form invalid
      return;
    }
    // $scope.loadingSpinner.startSpinner();

    emailService.sendEmail($scope.contactModel).then(function(response){
      $scope.successMessage = 'Thanks for your message!';
      setTimeout(function() {
        $scope.disableBtn = true;
        $scope.hideMessage = true;
        $scope.$apply();
      }, 5000);
    }).catch((err) => {
      $scope.errorMessage = 'Something went wrong :(, sh*&%t happens, please try again later';
      setTimeout(function() {
        $scope.hideMessage = true;
        $scope.$apply();
      }, 5000);
      console.warn(err);
    });

  };
});
