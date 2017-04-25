var kafka = require('kafka-node'),
	co = require('co'),
	Producer = kafka.Producer,
	KeyedMessage = kafka.KeyedMessage,
	Client = kafka.Client,
	client, producer;

var initialize_kafka = function() {
	return new Promise(function(resolve, reject) {
		client = new Client('localhost:2181')
		producer = new Producer(client)

		console.log('waiting producer ready')

		producer.on('ready', function() {
			console.log('producer is ready')
			resolve();
		})

	})
}

var send = function() {
	return co(function*() {
		yield initialize_kafka()

		var messages = []

		for (let i = 0; i < 1000000; i++) {
			messages.push('message' + i)
		}

		yield new Promise(function(resolve, reject) {
			producer.send([{
				topic: 'topic1',
				messages: messages
			}], function(err, message) {
				if (err) {
					producer.close()
					reject(err)
				} else {
					console.log(message)
					resolve(message)
				}
			})
		})

	})
}

if (require.main === module) {
	co(function*() {
		//yield initialize_kafka()
		yield send()
	})
}