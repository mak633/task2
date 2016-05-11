'use strict';

/**
 * @ngdoc function
 * @name appNameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appNameApp
 */
angular.module('appNameApp')
  .controller('MainCtrl', ['$scope','$http', '$rootScope', '$timeout', function($scope, $http, $rootScope, $timeout) {
    $http.get('scripts/products.json').success(function(data) {
      $scope.allProducts = data;
    })
    $http.get('scripts/companies.json').success(function(data) {
      $scope.allCompanies = data;
    })
    $timeout(function () {
      $scope.slickConfig = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 7,
        variableWidth: true,
        slidesToScroll: 7,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }]
      };
    });
  }]);
