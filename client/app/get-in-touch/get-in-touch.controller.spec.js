'use strict';

describe('Controller: GetInTouchCtrl', function () {

  // load the controller's module
  beforeEach(module('herokuNicoApp'));

  var GetInTouchCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetInTouchCtrl = $controller('GetInTouchCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
