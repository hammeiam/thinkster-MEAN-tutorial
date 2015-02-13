var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello world!';
		$scope.posts = ['post1', 'post2', 'post3', 'post4'];
	}]);