'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.home',
  'myApp.version'
]).

service('AuthenticationService', [function() {
	this.userLoggedIn = false;
}]).

config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'controller'
	}).when('/home', {
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'controller'
	}).otherwise({
			redirectTo: '/login'
	});
}]);

