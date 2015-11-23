// var myApp = angular.module('myApp', []);
angular.module('myApp', []);

angular.module('myApp').controller('FormController', function($scope){
	$scope.formData = {
		name: "iPalm",
		email: "kit.sumate@gmail.com"
	};

	$scope.register = function() {
		alert($scope.formData.name);
	};
})