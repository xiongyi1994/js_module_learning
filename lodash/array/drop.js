//_.drop(array, [n=1])

//Arguments:
// array (Array): The array to query.
// [n=1] (number): The number of elements to drop.

//Returns:
//(Array): Returns the slice of array.

var _ = require('lodash');

_.drop([1, 2, 3]);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]

//Creates a slice of array with n elements dropped from the beginning.