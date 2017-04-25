var xml2obj = require('xml2obj-stream');
var fs = require('fs');

var readStream = fs.createReadStream('user_tags_define.xml');
var parseStream = new xml2obj.Parser(readStream);

var results = [];
parseStream.setTransformation(function(_proto) {
	// map `_proto` to your needs here
	// e.g. take only attributes of every tag
	var obj = {};

	mapper(_proto);

	function mapper(o) {
		for (var attr in o.$attrs) {
			obj[attr] = o.$attrs[attr];
		}
		if (Array.isArray(o.$children)) {
			o.$children.forEach(mapper);
		}
	}

	return obj;
});
parseStream.each('floor_action', function(item) {
	results.push(item);
});

parseStream.on('end', function() {
	console.dir(results);
	// outputs ->
	// [{ 
	//  'act-id': 'H38310',
	//  'update-date-time': '20130628T11:24',
	//  'for-search': '20130628T11:22:19' 
	// }]
});