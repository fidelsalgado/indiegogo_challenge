'use strict';

/**
 * @ngdoc function
 * @name indiegogoChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the indiegogoChallengeApp
 */
angular.module('indiegogoChallengeApp')
  .controller('MainCtrl', function ($scope, $resource) {

    //var API_url = 'https://api.indiegogo.com/1/campaigns.json?api_token=';
    //var token = 'e377270bf1e9121da34cb6dff0e8af52a03296766a8e955c19f62f593651b346';
    var API_url = "https://api.indiegogo.com/1/search/campaigns.json?api_token=";
    var token = "e377270bf1e9121da34cb6dff0e8af52a03296766a8e955c19f62f593651b346";

    //$resource(API_url + token).get(function(data) {
    $resource(API_url + token).get(function(data) {
      $scope.campaigns = data.response.map(function(obj) {
        return {
          title: obj.title,
          tagline: obj.tagline,
          image: obj.baseball_card_image_url,
          url: obj.web_url
        };
      });
    });

  });
