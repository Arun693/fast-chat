console.log('App Loading');

window.ss=require('socketstream');
ss.server.on('ready',function () {
	console.log('socketstream ready');
	require('/app');
});