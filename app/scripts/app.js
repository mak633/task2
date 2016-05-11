'use strict';

/**
 * @ngdoc overview
 * @name appNameApp
 * @description
 * # appNameApp
 *
 * Main module of the application.
 */
angular
  .module('appNameApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'slickCarousel'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
