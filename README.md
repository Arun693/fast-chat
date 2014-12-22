initialize socketstream on server  
file : "/app.js"  
```javascript
var http=require('http');
var ss=require('socketstream');
var server = http.Server(ss.http.middleware);
server.listen(8000);
ss.start(server);
```
routing  
file : "/app.js"  
```javascript
ss.http.route('/',function (request,response) {
	console.log('request for "/" received');
});
```

define a client  
file : "/app.js"  
view : an html file from "/client/views" folder  
css : array of file or folder names from "/client/css" folder  
code : array of file or folder names from "/client/code" folder  
tmpl : array of file or folder names from "/client/templates" folder  
```javascript
ss.client.define('main',{
	view:'app.html',
	css:['libs/reset.css','app.css'],
	code:['libs/jquery.min.js','app'],
	tmpl:'*'
});
```

serve client  
file : "/app.js"  
```javascript
ss.http.route('/',function (request,response) {
	response.serveClient('main');
});
```

initialize socketstream on client  
file : "/client/code/<code-directory>/entry.js"  
```javascript
window.ss=require('socketstream');
ss.server.on('ready',function () {
	require('<main module of client code>');
});
```

defining rpc actions  
file : "/server/rpc/<rpcFile>"  
```javascript
exports.actions=function (request,response,ss) {
	var actions={};
	actions.add=function (param1,param2) {
		console.log('rpc action "add" called with values '+param1+' and '+param2);
		return response(param1+param2);
	};
	return actions;
};
```
invoke rpc action  
file: "/client/code/<clientCodeFile>"  
```javascript
ss.rpc('<rpcFile>.add',value1,value2,function (result) {
	console.log(result);
});
```

defining middleware  
file : "/server/middleware/<middlewareFile>"  
```javascript
exports.logRequest=function () {
	return function (request,response,next) {
		console.log('request received at '+new Date());
		next();
	};
};
```
using middleware  
file : "/server/rpc/<rpcFile>"  
```javascript
exports.actions=function (request,response,ss) {
	request.use('<middlewareFile>.logRequest');
	var actions={};
	return actions;
};
```
