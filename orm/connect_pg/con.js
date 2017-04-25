var orm = require('orm')
var util = require('util')

/*orm.connect('postgres://wushuu:woyoadmin@ADSWEB-SERVER/adsweb', function(err, db) {
	if (err) return console.error('Connection error: ' + err);

	// connected
	// ...
});*/

var db = orm.connect('postgres://xiongyi:@localhost/xy');

db.on('connect', function(err) {
	if (err) return console.error('Connection error: ' + err);
	console.log('222222')
		// connected
		// ...
});



var Person = db.define("person", {
	name: String,
	surname: String,
	age: Number, // FLOAT
	male: Boolean,
	continent: ["Europe", "America", "Asia", "Africa", "Australia", "Antartica"], // ENUM type
	photo: Buffer, // BLOB/BINARY
	data: Object // JSON encoded
}, {
	methods: {
		fullName: function() {
			return this.name + ' ' + this.surname;
		}
	},
	validations: {
		age: orm.enforce.ranges.number(18, undefined, "under-age")
	}
});

Person.find({}, function(err, items) {
	console.log(JSON.stringify(items))
})


console.log(db)
console.log('1111')