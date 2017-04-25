var co = require('co')

co(function*() {
	yield new Promise(function(resolve, reject) {
		console.log(1111111)
	})
})