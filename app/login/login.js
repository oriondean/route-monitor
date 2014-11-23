'use strict';

angular.module('myApp.login', [])

.controller('LoginCtrl', ['$location', 'AuthenticationService', function($location, authService) {
	console.log("Login controller instantiated", authService);

	this.username = "";
	this.password = "";

	this.onLoginClick = function() {
		if(this.username && this.password) {
			authService.isLoggedIn = true;
			$location.path("/home");
		}
	}
}]);