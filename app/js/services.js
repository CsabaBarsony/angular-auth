'use strict';

var services = angular.module("authService", []);

services.factory("User", function(){
	return {
		username: "Csati",
		isLogged: false
	};
});

services.factory("myInterceptor", function($q, $location){
	return function(promise){
		return promise.then(function(response){
			return response;
		}, function(response){
			$location.path("/login");
			return $q.reject(response);
		});
	};
});
