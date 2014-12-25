exports.logMessage=function () {
	return function (request,response,next) {
		console.log('message received : "'+request.params[0]+'"');
		next();
	};
};