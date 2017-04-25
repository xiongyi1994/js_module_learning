// redis 支持 5 种数据类型：字符串、散列／哈希、列表、集合、可排序集合


// redis 中的 键 命令：

// del key 删除一个指定的键（如果存在）。
// dump key 返回存储在指定键的序列化版本。
// exists key 检查键是否存在。
// expire key seconds 设置键在指定时间秒数后到期／过期。
// expireat key timestamp 设置在指定时间戳之后键到期／过期。这里的时间是Unix时间戳格式。
// pexpire key milliseconds 设置在指定时间戳之后键到期/过期。这里的时间是Unix时间戳格式。
// pexpireat key milliseconds-timestamp 以Unix时间戳形式来设置键的到期时间(以毫秒为单位)。
// keys pattern 查找与指定模式匹配的所有键。
// move key db 将键移动到另一个数据库。
// persist key 删除指定键的过期时间，得永生。
// pttl key 获取键的剩余到期时间。
// randomkey 从Redis返回一个随机的键。
// rename key newkey 如果新键不存在，重命名键。
// type key 返回存储在键中的值的数据类型。

// redis 中的 字符串 命令：

// set key value 此命令设置指定键的值。
// get key 获取指定键的值。
// getrange key start end 获取存储在键上的字符串的子字符串。
// getset key value 设置键的字符串值并返回其旧值。
// getbit key offset 返回在键处存储的字符串值中偏移处的位值。
// mget key1 [key2..] 获取所有给定键的值