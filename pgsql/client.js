var f = require('./function');
var pg = require('pg');

var conString = "postgres://xiongyi:@localhost/xy";

var client = new pg.Client(conString);

var value = ['10', 'fillp', 'abc'];

insertSQLString = 'insert into teacher values(\'' + value[0] + '\',\'' + value[1] + '\',\'' + value[2] + '\')';
selectSQLString = 'select * from teacher';
updateSQLString = "update teacher set NAME='ipone' where ID='4'";
deleteSQLString = "delete from teacher where ID='10'";


client.connect(function(error, results) {
	if (error) {
		console.log('ClientConnectionReady Error: ', error.message);
		client.end();
		return;
	}

	console.log('Connecting to postgres...');
	console.log('Connected to postgres automatically.');
	console.log('connection success...\n');

	f._select(client, selectSQLString);
	f._insert(client, insertSQLString);
	f._select(client, selectSQLString);
	f._delete(client, deleteSQLString);
	//f._update(client, updateSQLString);

});