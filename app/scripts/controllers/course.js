'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
   .controller('CourseCtrl', function ($scope,$http) {
     $http.get("http://dev.fridaycreation.com/api/v3/course/547c18d3b83a886272b54dda/info").success(function(data){
        $scope.course = data.doc;
     });
  });
