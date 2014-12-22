var http=require('http');
var ss=require('socketstream');
var server = http.Server(ss.http.middleware);

ss.client.define('helloWorld',{
	view:'app.html',
	css:['app.css'],
	code:['app'],
	tmpl:'*'
});

ss.http.route('/',function (request,response) {
	response.serveClient('helloWorld');
});

server.listen(8000);
ss.start(server);