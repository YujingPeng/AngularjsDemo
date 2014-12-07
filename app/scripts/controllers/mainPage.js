'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
   .controller('MainCtrl', function ($scope,$http) {
     $http.get("http://dev.fridaycreation.com/api/v3/courses").success(function(data){
     	var rename_image_path = function(path, type){
	  if( _.isUndefined(path) || _.isEmpty(path))
	    return ''
	  else{

	  };
	  var imageName = path.match(/\/[^\/]*$/);
	  var newImageName = path.replace(/\/[^\/]*$/, "/" + type + imageName);

	  return newImageName;
	};
	$scope.hotCourses = _.first(data.docs, 6);
	_.each($scope.hotCourses, function(e){
        		e['image'] = rename_image_path(e['image'],'640');
        		// console.log(e['image']);
        	});
});

     });


/*test  _each  and put in*/
/*var o =[{a: 1}, {a: 2}, {a: 3}];
var _ = require('underscore')
_.each(o, function(e){
	e.a = 4;
});

console.log(o);*/