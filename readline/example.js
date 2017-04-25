var readline = require("readline");

//创建readline接口实例。 在createInterface里 需要传入标准输入输出作为数据的输入输出流
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// question方法 在回调函数中 可以获取到用户的输入并进行处理
rl.question("你叫什么？", function(answer) {
	console.log("名字是：" + answer);
	// 不加close，则不会结束
	rl.close();
});

// close事件监听
rl.on("close", function() {
	// 结束程序
	process.exit(0);
});