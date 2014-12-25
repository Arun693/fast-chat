console.log('app loading');

window.ss=require('socketstream');
require('./app');
ss.server.on('ready',function () {
	console.log('socketstream ready');
});