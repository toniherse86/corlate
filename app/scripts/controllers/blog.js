'use strict';

/**
 * @ngdoc function
 * @name corlateApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the corlateApp
 */
angular.module('corlateApp')
  .controller('BlogCtrl', function ($scope) {
    
		$scope.buscar =  function(){
    		

  	if ($scope.busqueda=='') 
  		alert('Escribe')

  	else alert($scope.busqueda);

	}
  });
