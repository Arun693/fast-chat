console.log('app loaded');
app=angular.module('app', [])
.factory('MessagingService', ['$rootScope',function ($rootScope) {
	var service={};
	service.sendMessage=function (message,callback) {
		ss.rpc('messaging.sendMessage',message,function (messageSent) {
			$rootScope.$apply(function () {
				if (callback) {
					callback(messageSent);
				} 
			});
		});
	};
	ss.event.on('message',function (message) {
		$rootScope.$broadcast('message', message);
	});
	return service;
}])
.controller('MessageController', ['$scope','MessagingService', function ($scope,MessagingService) {
	$scope.messages=[];
	$scope.$on('message', function (messageEvent,message){
		$scope.$apply(function () {
			$scope.messages.push(message);
		});
	});
	$scope.sendMessage=function (message) {
		MessagingService.sendMessage(message);
	};
}]);