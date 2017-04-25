//_.compact(array)

//array (Array): The array to compact.

//(Array): Returns the new array of filtered values.

var _ = require('lodash');

console.log(_.compact([0, 1, false, 2, '', 3]))
	//=>[1, 2, 3]

//Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
//删除数组中的错误数据 ： false,null,0,"",undefined,NaN