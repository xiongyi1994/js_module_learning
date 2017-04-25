//_.difference(array, [values])

//Arguments:
//array (Array): The array to inspect.
//[values] (...Array): The values to exclude.

//Returns:
//(Array): Returns the new array of filtered values.

var _ = require('lodash');

console.log(_.difference([2, 1], [2, 3]))
	// => [1]

console.log(_.difference([1, 2, 3, 4], [1]))
	// => [2,3,4]

//Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
//The order and references of result values are determined by the first array.