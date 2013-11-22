/* global beforeEach, describe, it */
/* jshint maxlen: false, maxstatements: false */
'use strict';

var assert = require('proclaim');

describe('GET /<task-id>/run', function () {

	beforeEach(function (done) {
		var req = {
			method: 'GET',
			endpoint: '/abc000000000000000000001/run'
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function () {
		assert.strictEqual(this.last.status, 200);
	});

	it('should redirect me to the task page', function () {
		assert.strictEqual(this.last.request.uri.pathname, '/abc000000000000000000001');
	});

	it('should display a success message', function () {
		var alert = this.last.dom.querySelectorAll('[data-test=alert]')[0];
		assert.isDefined(alert);
		assert.match(alert.textContent, /new results are being generated/i);
	});

});
