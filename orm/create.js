var orm = require('orm');

orm.connect("postgres://xiongyi:@localhost/Person", function(err, db) {
	if (err) throw err;

	//var Person = db.define("person");

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

	db.sync(function(err) {
		if (err) throw err;

		Person.create({
			id: 1,
			name: "John",
			surname: "Doe",
			age: 27
		}, function(err) {
			if (err) throw err;
		});

	})

})