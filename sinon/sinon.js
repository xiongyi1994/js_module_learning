var sinon = require('sinon')
var assert = require('assert')

class foo {
	constructor() {

	}

	speak() {
		this.say()
	}

	say() {

	}
}

var f = new foo()

var spy = sinon.spy(f, 'say')

f.speak()

assert(spy.calledOnce)