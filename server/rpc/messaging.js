exports.actions=function (request,response,ss) {

	request.use('wares.logMessage');

	var actions={};

	actions.sendMessage=function (message) {
		ss.publish.all('message',message);
		return response(true);
	};

	return actions;
};