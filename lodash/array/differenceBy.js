//_.differenceBy(array, [values], [iteratee=_.identity])

//array (Array): The array to inspect.
//[values] (...Array): The values to exclude.
//[iteratee=_.identity] (Function): The iteratee invoked per element.

//(Array): Returns the new array of filtered values.

var _ = require('lodash');

console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))
	// => [1.2]

console.log()

//This method is like _.difference except that it accepts iteratee 
//which is invoked for each element of array and values to generate the criterion by which they're compared. 
//The order and references of result values are determined by the first array. 
//The iteratee is invoked with one argument:(value).