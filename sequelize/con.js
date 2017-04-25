var Sequelize = require('sequelize')

/*var sequelize = new Sequelize('account', 'wushuu', 'woyoadmin', {
	host: '192.168.127.207',
	dialect: 'postgres',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
})*/

var sequelize = new Sequelize('postgres://xiongyi:@localhost:5432/user')

var User = sequelize.define('user', {
	firstName: {
		type: Sequelize.STRING,
		field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
	},
	lastName: {
		type: Sequelize.STRING
	}
}, {
	freezeTableName: true //Model tableName will be the same as the model name
})

User.sync({
	force: true
}).then(function() {
	//Table created
	return User.create({
		firstName: 'John',
		lastName: 'Hancock'
	})
})