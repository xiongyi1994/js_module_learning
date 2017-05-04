var log4js = require('log4js');
var logger = log4js.getLogger();

var $depth = 11;

function main() {
	log4js.configure({
		appenders: [{
			type: 'console',
			layout: {
				type: "pattern",
				pattern: "%[[%r] %5.5p {%x{ln}} -%] %m",
				tokens: {
					ln: function() {
						// The caller:
						//console.log((new Error).stack)
						return (new Error).stack.split("\n")[$depth]
							// Just the namespace, filename, line:
							.replace(/^\s+at\s+(\S+)\s\((.+?)([^\/]+):(\d+):\d+\)$/, function() {
								return arguments[1] + '() ' + arguments[3] + ':' + arguments[4];
								// return arguments[0] +' '+ arguments[2] +' line '+arguments[3]
							});
					}
				}
			},
			filename: './cheese.log',
			category: 'cheese'
		}]
	});

	logger = log4js.getLogger('cheese');

	log4js.replaceConsole(logger)
	console.log(222222)
}

main()