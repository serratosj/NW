var Kinvey = require('kinvey-node-sdk');
var async = require('async');
var globals = require('../../lib/globals.js')

module.exports = {
  'Update Event (Kinvey)' : function () {
					var promise = Kinvey.initialize({
						apiHostname: 'https://kvy-us2-baas.kinvey.com',
					    appKey: 'kid_rkTjrk0tl',
					    appSecret: '5c04593ab2d84e808ddffa9033f17fba'

					});
					
					var user = globals.patient.username;
					var eventtitle = globals.events.title;

					console.log(user, eventtitle);

					promise.then(function onSuccess(){
						 Kinvey.User.login({
						  username: 'admin',
						  password: 'admin'
							}).then(function(){
							async.series([function GetUserId(callback){
								console.log("GetUserId - starts");
								 	// Get an instance
									var dataStore = Kinvey.DataStore.collection('UserProfile', Kinvey.DataStoreType.Network);
									// Create a query
									var query = new Kinvey.Query();

									query.matches('username', new RegExp('^.*' + user + '.*$')).and().equalTo('status', 'active');
									// Find query by Fetching data from your backend
									var stream = dataStore.find(query);
									stream.subscribe(function(entities) {
										console.log(entities);
										iduser = entities[0].idUser;
									    console.log('get user id: ' + iduser);
										callback();
										}, function onError(error) {
											console.log(error);
											callback(error);
										});	console.log("GetUserId - ends");
									
							 }, 
							 	function UpdateEvent(callback){
								 	//Get an instance of Goals collection
								 	console.log("UpdateEvents starts");
								 	var dataStore = Kinvey.DataStore.collection('Event', Kinvey.DataStoreType.Network);
								 	//query to fing user goals
								 	var query = new Kinvey.Query();
								    console.log('user id: ' + iduser);

								 	query.equalTo('idPatient', iduser);
								 	query.equalTo('title', eventtitle);
								 	//Update goal
								 	var stream = dataStore.find(query);
									stream.subscribe(function onNext(entity) {
									console.log('entity:', entity);
									entity[0].isEventCompleted = "true",
									entity[0].status = ["completed"]
									
									dataStore.save(entity[0]).then(function onSuccess(entity){
										console.log('entity updated', entity);
										callback();
									}).catch(function onError(error)
											{
												console.log(error);
											});
									

									}), (function onError(error)
									{
										console.log(error);
									}); console.log("UpdateEvents ends");
							 	}
							 ], function(err)
							 	{
							 		console.log(err);
							 	});

						 })}, function onError(error)
						 {
						 	console.log(error);
						 });

	}
};