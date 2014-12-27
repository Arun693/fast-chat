exports.logMessage=function () {
	return function (request,response,next) {
		if (!request.params[0]) {
			console.log('message ended');
		} else {
			console.log('message received : "'+request.params[0]+'"');
		}
		next();
	};
};