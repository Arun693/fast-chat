
var index=0;

exports.actions=function (request,response,ss) {

	request.use('wares.logMessage');

	var actions={};

	actions.end=function () {
		index++;
	};

	actions.send=function (text) {
		if (text) {
			ss.publish.all('message',{index:index,text:text});
		}
	};

	return actions;
};