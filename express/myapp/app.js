var express = require('express')
var app = express();

app.get('/', function(req, res) {
	res.send('Hello world!');
})

app.get('/login', function(req, res) {
	res.send('this is the login jsp!')
})

app.post('/first', function(req, res) {
	res.send('this is the first jsp')
})

//托管静态文件
app.use(express.static('file'));

//使用一个回调函数处理路由：
app.get('/example/a', function(req, res) {
	res.send('Hello from A!');
});

//使用多个回调函数处理路由（记得指定 next 对象）：
app.get('/example/b', function(req, res, next) {
	console.log('response will be sent by the next function ...');
	next();
}, function(req, res) {
	res.send('Hello from B!');
});

//使用回调函数数组处理路由：
var cb0 = function(req, res, next) {
	console.log('CB0');
	next();
}

var cb1 = function(req, res, next) {
	console.log('CB1');
	next();
}

var cb2 = function(req, res) {
	res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

//混合使用函数和函数数组处理路由：
var cb0 = function(req, res, next) {
	console.log('CB0');
	next();
}

var cb1 = function(req, res, next) {
	console.log('CB1');
	next();
}

app.get('/example/d', [cb0, cb1], function(req, res, next) {
	console.log('response will be sent by the next function ...');
	next();
}, function(req, res) {
	res.send('Hello from D!');
});

var server = app.listen(3000, function() {
	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port);
})