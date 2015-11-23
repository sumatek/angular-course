var myApp = angular.module('myApp', []);

myApp.controller('FormController', function($scope){
	$scope.formData = {
		name: "iPalm",
		email: "kit.sumate@gmail.com"
	};

	$scope.register = function() {
		alert($scope.formData.name);
	};
})