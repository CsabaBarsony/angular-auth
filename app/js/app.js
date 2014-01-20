'use strict';

angular.module('myApp', [
		'ngRoute',
		"controllers",
		"authService"
	]).config(['$routeProvider', "$httpProvider", function($routeProvider, $httpProvider) {
		$routeProvider
			.when("/home", {
				controller: "HomeController",
				templateUrl: "partials/home.html"
			})
			.when("/login", {
				controller: "LoginController",
				templateUrl: "partials/login.html"
			}).when("/restricted", {
				templateUrl: "/restricted"
			}).when("/logout", {
				controller: "LogoutController",
				templateUrl: "partials/logout.html"
			}).otherwise({redirectTo: '/'});

		$httpProvider.interceptors.push(function($q, $location){
			return {
				responseError: function(rejection) {
					if(rejection.status === 401){
						$location.path("/login");
					}
					return $q.reject(rejection);
				}
			};
		});
	}]);
