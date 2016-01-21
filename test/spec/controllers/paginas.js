'use strict';

describe('Controller: PaginasCtrl', function () {

  // load the controller's module
  beforeEach(module('corlateApp'));

  var PaginasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaginasCtrl = $controller('PaginasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PaginasCtrl.awesomeThings.length).toBe(3);
  });
});
