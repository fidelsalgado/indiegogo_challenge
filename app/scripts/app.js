'use strict';

/**
 * @ngdoc overview
 * @name indiegogoChallengeApp
 * @description
 * # indiegogoChallengeApp
 *
 * Main module of the application.
 */
angular
  .module('indiegogoChallengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.filter'
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
