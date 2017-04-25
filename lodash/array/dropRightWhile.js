//_.dropRightWhile(array, [predicate=_.identity])

//Arguments:
//array (Array): The array to query.
//[predicate=_.identity] (Function): The function invoked per iteration.

//Return:
//(Array): Returns the slice of array.

var _ = require('lodash');

var users = [{
	'user': 'barney',
	'active': true
}, {
	'user': 'fred',
	'active': false
}, {
	'user': 'pebbles',
	'active': false
}];

_.dropRightWhile(users, function(o) {
	return !o.active;
});
// => objects for ['barney']

// The `_.matches` iteratee shorthand.
_.dropRightWhile(users, {
	'user': 'pebbles',
	'active': false
});
// => objects for ['barney', 'fred']

// The `_.matchesProperty` iteratee shorthand.
_.dropRightWhile(users, ['active', false]);
// => objects for ['barney']

// The `_.property` iteratee shorthand.
_.dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']

//Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. 
//The predicate is invoked with three arguments: (value, index, array).