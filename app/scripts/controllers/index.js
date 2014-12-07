'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
   .controller('IndexCtrl', function ( $scope , $http ) {
     $http.get("http://dev.fridaycreation.com/api/v3/metadata").success(function(data){
        $scope.categorys =_.groupBy(data.doc.categories,'main');
     //console.log(_.groupBy(data.doc.categories,'main'));
     });
       /*$scope.courseMain=function({{sub}}){
    	$scope.users.splice(userId,1);
   };*/
  });
