var app = angular.module('myApp', []);

app.controller('FormController', function ($scope) {
	$scope.formData = {};
	$scope.postList = [];

	$scope.postMessage = function() {
		$scope.addMessage()
		$scope.clearMesage();
	};

	$scope.addMessage = function() {
		$scope.formData.postDate = new Date();
		$scope.keepMessage = angular.copy($scope.formData);
		$scope.postList.push($scope.keepMessage)
	};

	$scope.clearMesage = function() {
		$scope.formData = {};
	};
})

app.filter('convertContent', function() {
    return function(input) {
    	if(input.length > 10) {
    		return input.substring(1, 10)+"...";
    	}
       return input;
    }
});