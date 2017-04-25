var orm = require('orm')
var co = require('co')
var promisify = require('bluebird').promisify

var db = orm.connect("postgres://xiongyi:@localhost/xy")

var person

co(function*() {
	yield new Promise(function(resolve, reject) {
		person = db.define("person", {
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
		})
		resolve()
	}).then(() => {
		console.log("init table person successfully!")
	}).catch((err) => {
		reject(err)
	})

	yield new Promise(function(resolve, reject) {
		person.find({
			id: 123,
		}, function(err, items) {
			if (err) throw err;
			console.log(items[0].fullName())
			resolve()
		})
	})

})