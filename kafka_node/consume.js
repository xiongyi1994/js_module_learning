var kafka = require('kafka-node');
var co = require('co')
var Client = kafka.Client;
var Consumer = kafka.Consumer;
var HighLevelConsumer = kafka.HighLevelConsumer;
var client, consumer

var topics = [{
	topic: 'topic1',
	partition: 0
}];

var options = {
	autoCommit: true,
	autoCommitIntervalMs: 5000,
	fetchMaxWaitMs: 1000,
	fetchMaxBytes: 1024 * 1024,
	fromOffset: true
};

var create_client = function() {

	return co(function*() {

		client = new Client('localhost:2181')
		consumer = new HighLevelConsumer(client, topics, options)
		console.log('initialize_consumer_successfully!!')

	})

}

var consume = function() {

	return co(function*() {
		consumer.on('message', function(message) {
			console.log(message)
		})
	})

}

if (require.main === module) {

	co(function*(resolve, reject) {
		yield create_client()
		yield consume()
	})

}