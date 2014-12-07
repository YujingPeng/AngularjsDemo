'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
         controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
       .when('/course', {
        templateUrl: 'views/course.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
  });

