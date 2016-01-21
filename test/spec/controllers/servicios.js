'use strict';

describe('Controller: ServiciosCtrl', function () {

  // load the controller's module
  beforeEach(module('corlateApp'));

  var ServiciosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiciosCtrl = $controller('ServiciosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ServiciosCtrl.awesomeThings.length).toBe(3);
  });
});
