var fs = require("fs")
var util = require("util")
var xml2js = require('xml2js');
var builder = new xml2js.Builder();
var inspect = require('eyes').inspector({
	maxLength: false
})
var parseString = require('xml2js').parseString;
var user_tags = []

function get(callback) {
	try {
		//var data = fs.readFileSync("./tags_define.xml", "utf-8");
		//var data = fs.readFileSync("./111.xml", "utf-8");
		var data = fs.readFileSync("./user_tags_define.xml", "utf-8");
		return data
	} catch (e) {

	}
}

function main() {
	var xml = get()
		//console.log(xml)
	parseString(xml, {
		object: true
	}, function(err, result) {
		//console.log(JSON.stringify(result));
		console.log(result.tags)
			//console.log(Object.values(result))
			//console.log(util.inspect(result, false, null))
			//console.log(inspect(result, false, null))
	});
}

main()