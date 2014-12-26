var http=require('http');
var ss=require('socketstream');
var server = http.Server(ss.http.middleware);

ss.client.define('helloWorld',{
	view:'app.html',
	css:['app.css'],
	code:['libs/angular/angular.min.js','app'],
	tmpl:'*'
});

ss.http.route('/',function (request,response) {
	response.serveClient('helloWorld');
});

server.listen(80,function () {
	console.log('server listening at port 80');
});
ss.start(server);