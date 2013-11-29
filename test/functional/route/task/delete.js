/* global beforeEach, describe, it */
/* jshint maxlen: false, maxstatements: false */
'use strict';

var assert = require('proclaim');

describe('GET /<task-id>/delete', function () {

	beforeEach(function (done) {
		var req = {
			method: 'GET',
			endpoint: '/abc000000000000000000001/delete'
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function () {
		assert.strictEqual(this.last.status, 200);
	});

	it('should have a "Delete URL" form', function () {
		var form = this.last.dom.querySelectorAll('[data-test=delete-url-form]')[0];
		assert.isDefined(form);
		assert.strictEqual(form.getAttribute('action'), '/abc000000000000000000001/delete');
		assert.strictEqual(form.getAttribute('method'), 'post');
	});

	it('should display a link back to the task page', function () {
		assert.greaterThan(this.last.dom.querySelectorAll('[href="/abc000000000000000000001"]').length, 0);
	});

});

describe('POST /<task-id>/delete', function () {

	beforeEach(function (done) {
		var req = {
			method: 'POST',
			endpoint: '/abc000000000000000000001/delete'
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function () {
		assert.strictEqual(this.last.status, 200);
	});

	it('should delete the task', function (done) {
		this.webservice.task('abc000000000000000000001').get({}, function (err) {
			assert.strictEqual(err.message, 'Error 404');
			done();
		});
	});

	it('should redirect me to the home page', function () {
		assert.strictEqual(this.last.request.uri.pathname, '/');
	});

	it('should display a success message', function () {
		var alert = this.last.dom.querySelectorAll('[data-test=alert]')[0];
		assert.isDefined(alert);
		assert.match(alert.textContent, /been deleted/i);
	});

});
