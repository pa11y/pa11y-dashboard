// This file is part of pa11y-dashboard.
// 
// pa11y-dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// pa11y-dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with pa11y-dashboard.  If not, see <http://www.gnu.org/licenses/>.

/* global beforeEach, describe, it */
/* jshint maxlen: false, maxstatements: false */
'use strict';

var assert = require('proclaim');

describe('GET /<task-id>/edit', function () {

	beforeEach(function (done) {
		var req = {
			method: 'GET',
			endpoint: '/abc000000000000000000001/edit'
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function () {
		assert.strictEqual(this.last.status, 200);
	});

	it('should have an "Edit URL" form', function () {
		var form = this.last.dom.querySelectorAll('[data-test=edit-url-form]')[0];
		assert.isDefined(form);
		assert.strictEqual(form.getAttribute('action'), '/abc000000000000000000001/edit');
		assert.strictEqual(form.getAttribute('method'), 'post');
	});

	it('should display a link back to the task page', function () {
		assert.greaterThan(this.last.dom.querySelectorAll('[href="/abc000000000000000000001"]').length, 0);
	});

	describe('"Edit URL" form', function () {

		beforeEach(function () {
			this.form = this.last.dom.querySelectorAll('[data-test=edit-url-form]')[0];
		});

		it('should have a "name" field', function () {
			var field = this.form.querySelectorAll('input[name=name]')[0];
			assert.isDefined(field);
			assert.strictEqual(field.getAttribute('type'), 'text');
			assert.strictEqual(field.getAttribute('value'), 'NPG Home');
		});

		it('should have a disabled "url" field', function () {
			var field = this.form.querySelectorAll('input[name=url]')[0];
			assert.isDefined(field);
			assert.strictEqual(field.getAttribute('type'), 'url');
			assert.strictEqual(field.getAttribute('value'), 'nature.com');
			assert.isDefined(field.getAttribute('disabled'));
		});

		it('should have a disabled "standard" field', function () {
			var field = this.form.querySelectorAll('select[name=standard]')[0];
			assert.isDefined(field);
			assert.isDefined(field.getAttribute('disabled'));
		});

		it('should have a "username" field', function () {
			var field = this.form.querySelectorAll('input[name=username]')[0];
			assert.isDefined(field);
			assert.strictEqual(field.getAttribute('type'), 'text');
			assert.strictEqual(field.getAttribute('value'), 'user');
		});

		it('should have a "password" field', function () {
			var field = this.form.querySelectorAll('input[name=password]')[0];
			assert.isDefined(field);
			assert.strictEqual(field.getAttribute('type'), 'text');
			assert.strictEqual(field.getAttribute('value'), 'access');
		});

		it('should have "ignore" fields', function () {
			var fields = this.form.querySelectorAll('input[name="ignore[]"]');
			assert.isDefined(fields);
			assert.notStrictEqual(fields.length, 0);
		});

	});

});

describe('POST /<task-id>/edit', function () {

	beforeEach(function (done) {
		var req = {
			method: 'POST',
			endpoint: '/abc000000000000000000001/edit',
			body: {
				name: 'foo',
				username: 'newuser',
				password: 'secure',
				ignore: ['bar', 'baz']
			}
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function () {
		assert.strictEqual(this.last.status, 200);
	});

	it('should edit the task', function (done) {
		this.webservice.task('abc000000000000000000001').get({}, function (err, task) {
			assert.strictEqual(task.name, 'foo');
			assert.strictEqual(task.username, 'newuser');
			assert.strictEqual(task.password, 'secure');
			assert.deepEqual(task.ignore, ['bar', 'baz']);
			done();
		});
	});

	it('should display a success message', function () {
		var alert = this.last.dom.querySelectorAll('[data-test=alert]')[0];
		assert.isDefined(alert);
		assert.match(alert.textContent, /been saved/i);
	});

});

