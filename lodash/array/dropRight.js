// _.dropRight(array, [n=1])

//Arguments:
//array (Array): The array to query.
//[n=1] (number): The number of elements to drop.

//Returns:
//(Array): Returns the slice of array.

var _ = require('lodash');

_.dropRight([1, 2, 3]);
// => [1, 2]

_.dropRight([1, 2, 3], 2);
// => [1]

_.dropRight([1, 2, 3], 5);
// => []

_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]

//Creates a slice of array with n elements dropped from the end.