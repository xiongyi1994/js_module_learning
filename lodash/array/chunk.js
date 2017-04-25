//_.chunk(array, [size=1])

//array (Array): The array to process.
//[size=1] (number): The length of each chunk

//(Array): Returns the new array of chunks.

var _ = require('lodash');

var a = ['a', 'b', 'c', 'd']

console.log(_.chunk(a, 2))
	// => [['a', 'b'], ['c', 'd']]

console.log(_.chunk(a, 3))
	// => [['a', 'b', 'c'], ['d']]

//Creates an array of elements split into groups the length of size.
//If array can't be split evenly, the final chunk will be the remaining elements.
//将数组按块分离