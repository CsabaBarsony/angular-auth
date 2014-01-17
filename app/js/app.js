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
				templateUrl: "partials/login.html"
			})
			.when("/restricted", {
				templateUrl: "partials/restricted.html"
			}).otherwise({redirectTo: '/'});

		$httpProvider.interceptors.push(function($q){
			return {
				// optional method
				'request': function(config) {
					console.log("1");
					// do something on success
					return config || $q.when(config);
				},

				// optional method
				'requestError': function(rejection) {
					console.log("2");
					// do something on error
					return $q.reject(rejection);
				},

				// optional method
				'response': function(response) {
					console.log("3");
					// do something on success
					return response || $q.when(response);
				},

				// optional method
				'responseError': function(rejection) {
					console.log("4");
					// do something on error
					if(rejection.status === 401){
						$location.path("/login");
					}
					return $q.reject(rejection);
				}
			};
		});
	}])/*.config(function ($httpProvider) {
		$httpProvider.interceptors.push('requestInterceptor');
	}).factory('requestInterceptor', function ($q, $rootScope) {
		$rootScope.pendingRequests = "init";
		return {
			'request': function (config) {
				console.log("request");
				$rootScope.pendingRequests = "request";
				return config || $q.when(config);
			},

			'requestError': function(rejection) {
				console.log("requestError");
				$rootScope.pendingRequests = "requestError";
				return $q.reject(rejection);
			},

			'response': function(response) {
				console.log("response");
				$rootScope.pendingRequests = "response";
				return response || $q.when(response);
			},

			'responseError': function(rejection) {
				console.log("responseError");
				$rootScope.pendingRequests = "responseError";
				return $q.reject(rejection);
			}
		}
	})*/;
