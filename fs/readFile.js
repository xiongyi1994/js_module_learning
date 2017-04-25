var fs = require('fs')
fs.readFile("./test.text", "utf-8", function(err, data) {
	if (err) {
		console.err("error");
	} else {
		console.log(data)
	}
})
console.log("read file async end.")