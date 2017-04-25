var fs = require('fs')
var data = fs.readFileSync("./test.text", "utf-8")
console.log(data);
console.log("read file sync end.")