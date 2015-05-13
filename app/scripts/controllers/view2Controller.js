angular.module('myApp').controller('View2Controller', ['$scope', function($scope){
	$scope.message = "こんにちわ！";
	
	$scope.clear = function() {
		$scope.firstName = "";
		$scope.lastName = "";
	};
}]);
