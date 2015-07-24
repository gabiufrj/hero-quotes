var app = angular.module('app');

app.controller('MainController', function ($scope, InfoService) {

	$scope.image = InfoService.getImage();
	$scope.quote = InfoService.getQuote();
	
	$scope.generate = function () {
		$scope.image = InfoService.getImage();
		$scope.quote = InfoService.getQuote();
	}

});