'use strict';

describe('Controller: PortofolioCtrl', function () {

  // load the controller's module
  beforeEach(module('corlateApp'));

  var PortofolioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortofolioCtrl = $controller('PortofolioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PortofolioCtrl.awesomeThings.length).toBe(3);
  });
});
