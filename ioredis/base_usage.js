var Redis = require('ioredis')
var redis = new Redis() //连接redis 默认连接参数：localhost:6379

redis.set('foo', 'bar');
redis.set('foo', 'bar1'); //重复set会更新值
redis.get('foo', function(err, result) {
	console.log(result);
});

// Or using a promise if the last argument isn't a function
redis.get('foo').then(function(result) {
	console.log(result);
});