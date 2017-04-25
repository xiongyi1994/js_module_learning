var xmlreader = require("xmlreader")
var fs = require("fs")

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
	var tags = []
	var xml = get()
		//xml = '<response id="1" shop="aldi">' + 'This is some other content' + '<who name="james">James May</who>' + '<who name="sam">' + 'Sam Decrock' + '<location>Belgium</location>' + '</who>' + '<who name="jack">Jack Johnsen</who>' + '<games age="6">' + '<game>Some great game</game>' + '<game>Some other great game</game>' + '</games>' + '<note>These are some notes</note>' + '</response>'
		//console.log(typeof xml)
	xmlreader.read(xml, function(err, res) {
		if (err) return console.log(err);
		res.tags.tag.each(function(i, tag) {
			//console.log(tag.attributes())
			var obj = {}
			obj.tag_name = tag.attributes().name
			obj.tag_id = tag.attributes().id
			tags.push(obj)
			tag.tag.each(function(i, tag) {
				var obj = {}
				obj.tag_name = tag.attributes().name
				obj.tag_id = tag.attributes().id
				tags.push(obj)
				if (tag.tag != null) {
					tag.tag.each(function(i, tag) {
						var obj = {}
						obj.tag_name = tag.attributes().name
						obj.tag_id = tag.attributes().id
						tags.push(obj)
					})
				}
			})
		})
	})
	console.log(tags.length)
}

main()