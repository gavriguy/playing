'use strict';

angular.module('stars2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'HTML5 Boilerplate',
      'AngularJS',
      'HTML5 Boilerplate',
      'AngularJS',
      'HTML5 Boilerplate',
      'AngularJS',
      'HTML5 Boilerplate',
      'AngularJS',
      'HTML5 Boilerplate',
      'AngularJS',
      'HTML5 Boilerplate',
      'AngularJS',
      'HTML5 Boilerplate',
      'AngularJS',
      'HTML5 Boilerplate',
      'AngularJS',
      'HTML5 Boilerplate',
      'AngularJS',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.showSideBar = false;
    $scope.showSidebar = function(index) {
    	$scope.showSideBar = true;
    	$scope.currentItem = $scope.awesomeThings[index];
    	$scope.currentIndex = index;

    }
    $scope.changeMe = function() {
    	$scope.awesomeThings[$scope.currentIndex] = $scope.currentItem;
    }
  });
