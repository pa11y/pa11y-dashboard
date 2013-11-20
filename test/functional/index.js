/* global beforeEach, describe, it */
/* jshint maxlen: 200, maxstatements: 20 */
'use strict';

var assert = require('proclaim');

describe('GET /', function () {

	describe('with no query', function () {

		beforeEach(function (done) {
			var req = {
				method: 'GET',
				endpoint: '/'
			};
			this.navigate(req, done);
		});

		it('should send a 200 status', function () {
			assert.strictEqual(this.last.status, 200);
		});

		it('should have an "Add new URL" button', function () {
			var elem = this.last.dom.querySelectorAll('[data-test=add-task]');
			assert.strictEqual(elem.length, 1);
			assert.strictEqual(elem[0].getAttribute('href'), '/new');
		});

	});

});
