// somewhere else, eg, middleware

var database = require('./db');

database('192.168.127.209', 'adsweb', function(err, db) {
	if (err) throw err;
	console.log(err)

	//	console.log(db)

});