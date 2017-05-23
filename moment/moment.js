var moment = require('moment')
console.log(moment()) // -> 返回当前时间

// 根据一个时间的字符产来创建moment对象 要符合ISO8601 
console.log(moment("2012-05-12")) // -> 返回特定时间