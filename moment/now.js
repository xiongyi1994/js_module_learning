var moment = require('moment')
console.log(moment())


time = moment().add(-1, 'days').valueOf()
moment.now = function() {
	return time
}
console.log(moment())
console.log(new Date())