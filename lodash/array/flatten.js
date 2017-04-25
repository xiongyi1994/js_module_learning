var _ = require('lodash');

var a = [
	[1, 2], 3, 4, [5, 6, [7]]
]

var b = _.flatten(a)

console.log(b)

//_.flatten()

//将数组降一个维度