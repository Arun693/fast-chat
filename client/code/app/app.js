console.log('app loaded');
angular.module('app', [])
.factory('MessagingService', ['$rootScope',function ($rootScope) {
	var service={};
	service.send=function (message) {
		ss.rpc('messaging.send',message);
	};
	service.end=function () {
		ss.rpc('messaging.end');
	};
	ss.event.on('message',function (message) {
		$rootScope.$broadcast('message', message);
	});
	return service;
}])
.controller('MessageController', ['$scope','MessagingService', function ($scope,MessagingService) {
	$scope.messages=[];
	var currentIndex;
	$scope.$on('message', function (messageEvent,message){
		$scope.$apply(function () {
			if (currentIndex!=message.index) {
				currentIndex=message.index;
				$scope.messages.push(message.text);
			} else {
				$scope.messages.splice($scope.messages.length-1,1,message.text);
			}
		});
	});
	$scope.send=function (message) {
		if (message) {
			MessagingService.send(message);
		} 
	};
	$scope.end=function () {
		$scope.message='';
		MessagingService.end();
	};
}]);