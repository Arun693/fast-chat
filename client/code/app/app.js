console.log('App Loaded');

ss.rpc('actions.add',2,3,function (result) {
	console.log(result);
});