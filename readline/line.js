var readline = require('readline')
var co = require('co')
var orm = require('orm')

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

var db = orm.connect("postgres://xiongyi:@localhost/xy")

var person


co(function*() {

	yield new Promise(function(resolve, reject) {
		person = db.define("shop", {
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
		console.log(person)
		resolve()
	}).then(() => {
		console.log("init table person successfully!")
	}).catch((err) => {
		reject(err)
	})


	/*yield new Promise(function(resolve, reject) {
		rl.on('line', function(line) {
			switch (line.trim()) {
				case 'copy':
					console.log("复制");
					break;
				case 'hello':
					rl.write("Write");
					console.log('world!');
					break;
				case 'close':
					rl.close();
					break;
				default:
					console.log('没有找到命令！');
					break;
			}
		})
	})

	yield new Promise(function(resolve, reject) {
		rl.on('close', function() {
			console.log('bye!')
			process.exit(0)
		})
	})*/

})