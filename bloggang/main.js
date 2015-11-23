var app = angular.module('myApp', []);

app.controller('FormController', function ($scope) {
	$scope.formData = {};
	$scope.postList = [];

	$scope.postMessage = function() {
		var message = $scope.populateMessage();
		$scope.addMessage(message)
		$scope.clearMesage();
	};

	$scope.populateMessage = function() {
		return message = {
			title : $scope.formData.title,
			content : $scope.formData.content,
			author : $scope.formData.author,
			postDate : new Date()
		};
	};

	$scope.addMessage = function(message) {
		$scope.postList.push(message)
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