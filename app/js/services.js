'use strict';

var services = angular.module("authService", []);

services.factory("User", function(){
	return {
		username: "init",
		token: "init",
		loggedIn: false
	};
});
