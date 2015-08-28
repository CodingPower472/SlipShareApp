'use strict';

var app = angular
    .module('SlipShareApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase',
    'toaster',
    'smart-table'
  ])
    .constant('FURL', 'https://slipshareapp.firebaseio.com/')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'AuthController'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'AuthController'
            })
            .when('/post', {
                templateUrl: 'views/post.html',
                controller: 'PostController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });