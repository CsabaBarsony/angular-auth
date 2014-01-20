'use strict';

var controllers = angular.module("controllers", []);

controllers.controller("HomeController", ["$scope", "User", function($scope, User){
	$scope.username = User.username;
	$scope.token = User.token;
}]);

controllers.controller("LoginController", ["$scope", "$http", "$location", "User", function($scope, $http, $location, User){
	if(User.loggedIn){
		$location.path("/home");
	}
	$scope.username = "";
	$scope.password = "";
	$scope.errorMessage = "";
	$scope.LoginFormSubmit = function(){
		$http({
			method: "POST",
			url: "/login",
			data: {
				username: $scope.username,
				password: $scope.password
			}
		}).success(function(data, status, headers, config){
				User.username = data.username;
				User.token = data.token;
				User.loggedIn = true;
				$http.defaults.headers.common.Authorization = User.token;
				$location.path("/home");
			}).error(function(data, status, headers, config){
				$scope.errorMessage = "Wrong username/password";
			});
	};
}]);

controllers.controller("LogoutController", ["$scope", "$http", "$location", "User", function($scope, $http, $location, User){
	User.username = "";
	User.token = "";
	User.loggedIn = false;
	$http.defaults.headers.common.Authorization = "";
}]);