// This file is part of Pa11y Dashboard.
//
// Pa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.

// jscs:disable maximumLineLength, requireArrowFunctions
'use strict';

const assert = require('proclaim');

describe('GET /<task-id>/edit', function() {

	beforeEach(function(done) {
		const request = {
			method: 'GET',
			endpoint: '/abc000000000000000000001/edit'
		};
		this.navigate(request, done);
	});

	it('should send a 200 status', function() {
		assert.strictEqual(this.last.status, 200);
	});

	it('should have an "Edit URL" form', function() {
		const form = this.last.dom('[data-test=edit-url-form]').eq(0);
		assert.isDefined(form);
		assert.strictEqual(form.attr('action'), '/abc000000000000000000001/edit');
		assert.strictEqual(form.attr('method'), 'post');
	});

	it('should display a link back to the task page', function() {
		assert.greaterThan(this.last.dom('[href="/abc000000000000000000001"]').length, 0);
	});

	describe('"Edit URL" form', function() {

		beforeEach(function() {
			this.form = this.last.dom('[data-test=edit-url-form]').eq(0);
		});

		it('should have a "name" field', function() {
			const field = this.form.find('input[name=name]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'text');
			assert.strictEqual(field.attr('value'), 'NPG Home');
		});

		it('should have a disabled "url" field', function() {
			const field = this.form.find('input[name=url]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'url');
			assert.strictEqual(field.attr('value'), 'nature.com');
			assert.isDefined(field.attr('disabled'));
		});

		it('should have a "wait" field', function() {
			const field = this.form.find('input[name=wait]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'text');
			assert.strictEqual(field.attr('value'), '0');
		});

		it('should have an "actions" field', function() {
			const field = this.form.find('textarea[name=actions]').eq(0);
			assert.isDefined(field);
		});

		it('should have a disabled "standard" field', function() {
			const field = this.form.find('select[name=standard]').eq(0);
			assert.isDefined(field);
			assert.isDefined(field.attr('disabled'));
		});

		it('should have a "username" field', function() {
			const field = this.form.find('input[name=username]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'text');
			assert.strictEqual(field.attr('value'), 'user');
		});

		it('should have a "password" field', function() {
			const field = this.form.find('input[name=password]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'text');
			assert.strictEqual(field.attr('value'), 'access');
		});

		it('should have a "hideElements" field', function() {
			const field = this.form.find('input[name=hideElements]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'text');
			assert.strictEqual(field.attr('value'), '');
		});

		it('should have a "headers" field', function() {
			const field = this.form.find('textarea[name=headers]').eq(0);
			assert.isDefined(field);
		});

		it('should have "ignore" fields', function() {
			const fields = this.form.find('input[name="ignore[]"]');
			assert.isDefined(fields);
			assert.notStrictEqual(fields.length, 0);
		});

	});

});

describe('POST /<task-id>/edit', function() {

	beforeEach(function(done) {
		const request = {
			method: 'POST',
			endpoint: '/abc000000000000000000001/edit',
			form: {
				name: 'foo',
				username: 'newuser',
				password: 'secure',
				ignore: ['bar', 'baz']
			}
		};
		this.navigate(request, done);
	});

	it('should send a 200 status', function() {
		assert.strictEqual(this.last.status, 200);
	});

	it('should edit the task', function(done) {
		this.webservice.task('abc000000000000000000001').get({}, function(error, task) {
			assert.strictEqual(task.name, 'foo');
			assert.strictEqual(task.username, 'newuser');
			assert.strictEqual(task.password, 'secure');
			assert.deepEqual(task.ignore, ['bar', 'baz']);
			done(error);
		});
	});

	it('should display a success message', function() {
		const alert = this.last.dom('[data-test=alert]').eq(0);
		assert.isDefined(alert);
		assert.match(alert.text(), /been saved/i);
	});

});
