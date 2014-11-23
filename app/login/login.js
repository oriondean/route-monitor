'use strict';

angular.module('myApp.login', [])

.controller('LoginCtrl', ['AuthenticationService', function(authService) {
	console.log("Login controller instantiated", authService);
}]);