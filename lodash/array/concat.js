//_.concat(array, [values])

//array (Array): The array to concatenate.
//[values] (...*): The values to concatenate.

var _ = require('lodash');

var array = [1];
var other = _.concat(array, 2, [3], [
	[4]
]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]

//Creates a new array concatenating array with any additional arrays and/or values.
//根据其他的值或者数组来构建一个新的数组