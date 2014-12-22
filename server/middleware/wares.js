exports.logRequest=function () {
	return function (request,response,next) {
		console.log('request received at '+new Date());
		next();
	};
};