//_.dropWhile(array, [predicate=_.identity])

//Arguments:
//array (Array): The array to query.
//[predicate=_.identity] (Function): The function invoked per iteration.

//Return:
//(Array): Returns the slice of array.

var _ = require('lodash');

var users = [{
	'user': 'barney',
	'active': false
}, {
	'user': 'fred',
	'active': false
}, {
	'user': 'pebbles',
	'active': true
}];

_.dropWhile(users, function(o) {
	return !o.active;
});
// => objects for ['pebbles']

// The `_.matches` iteratee shorthand.
_.dropWhile(users, {
	'user': 'barney',
	'active': false
});
// => objects for ['fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// => objects for ['pebbles']

// The `_.property` iteratee shorthand.
_.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']

//Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. 
//The predicate is invoked with three arguments: (value, index, array).