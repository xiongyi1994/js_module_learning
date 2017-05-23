var readline = require('readline')

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.on('line', function(line) {
	console.log('你的输入是：' + line)
})