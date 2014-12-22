exports.actions=function (request,response,ss) {

	request.use('wares.logRequest');

	var actions={};

	actions.add=function (param1,param2) {
		console.log('rpc action "add" called with values '+param1+' and '+param2);
		return response(param1+param2);
	};

	return actions;
};