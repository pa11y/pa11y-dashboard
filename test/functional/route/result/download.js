/* global beforeEach, describe, it */
/* jshint maxlen: false, maxstatements: false */
'use strict';

var assert = require('proclaim');

describe('GET /<task-id>/<result-id>.csv', function () {

	beforeEach(function (done) {
		var req = {
			method: 'GET',
			endpoint: '/abc000000000000000000001/def000000000000000000001.csv',
			nonDom: true
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function () {
		assert.strictEqual(this.last.status, 200);
	});

	it('should output CSV results', function () {
		assert.match(this.last.body, /^"code","message","type"/);
	});

});

describe('GET /<task-id>/<result-id>.json', function () {

	beforeEach(function (done) {
		var req = {
			method: 'GET',
			endpoint: '/abc000000000000000000001/def000000000000000000001.json',
			nonDom: true
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function () {
		assert.strictEqual(this.last.status, 200);
	});

	it('should output JSON results', function () {
		var json = this.last.body;
		assert.strictEqual(json.task.name, 'NPG Home');
		assert.strictEqual(json.task.url, 'nature.com');
		assert.strictEqual(json.count.error, 1);
		assert.strictEqual(json.count.warning, 2);
		assert.strictEqual(json.count.notice, 3);
		assert.isArray(json.results);
	});

});
