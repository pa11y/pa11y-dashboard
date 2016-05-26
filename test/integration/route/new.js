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

'use strict';

var assert = require('proclaim');

describe('GET /new', function() {

	beforeEach(function(done) {
		var req = {
			method: 'GET',
			endpoint: '/new'
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function() {
		assert.strictEqual(this.last.status, 200);
	});

	it('should not display an error message', function() {
		assert.strictEqual(this.last.dom('[data-test=error]').length, 0);
	});

	it('should have an "Add new URL" form', function() {
		var form = this.last.dom('[data-test=new-url-form]').eq(0);
		assert.isDefined(form);
		assert.strictEqual(form.attr('action'), '/new');
		assert.strictEqual(form.attr('method'), 'post');
	});

	describe('"Add New URL" form', function() {

		beforeEach(function() {
			this.form = this.last.dom('[data-test=new-url-form]').eq(0);
		});

		it('should have a "name" field', function() {
			var field = this.form.find('input[name=name]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'text');
			assert.strictEqual(field.attr('value'), '');
		});

		it('should have a "url" field', function() {
			var field = this.form.find('input[name=url]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'url');
			assert.strictEqual(field.attr('value'), '');
		});

		it('should have a "wait" field', function() {
			var field = this.form.find('input[name=wait]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'text');
			assert.strictEqual(field.attr('value'), '');
		});

		it('should have a "username" field', function() {
			var field = this.form.find('input[name=username]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'text');
			assert.strictEqual(field.attr('value'), '');
		});

		it('should have a "password" field', function() {
			var field = this.form.find('input[name=password]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.attr('type'), 'text');
			assert.strictEqual(field.attr('value'), '');
		});

		it('should have a "standard" field', function() {
			var field = this.form.find('select[name=standard]').eq(0);
			assert.isDefined(field);
			assert.strictEqual(field.find('option').length, 4);
		});

		it('should have "ignore" fields', function() {
			var fields = this.form.find('input[name="ignore[]"]');
			assert.isDefined(fields);
			assert.notStrictEqual(fields.length, 0);
		});

	});

});

describe('POST /new', function() {

	describe('with invalid query', function() {

		beforeEach(function(done) {
			var req = {
				method: 'POST',
				endpoint: '/new',
				form: {
					name: '',
					url: ''
				}
			};
			this.navigate(req, done);
		});

		it('should send a 200 status', function() {
			assert.strictEqual(this.last.status, 200);
		});

		it('should display an error message', function() {
			assert.strictEqual(this.last.dom('[data-test=error]').length, 1);
		});

	});

	describe('with valid query', function() {

		beforeEach(function(done) {
			var req = {
				method: 'POST',
				endpoint: '/new',
				form: {
					name: 'Example',
					url: 'http://example.com/',
					standard: 'WCAG2AA'
				}
			};
			this.navigate(req, done);
		});

		it('should send a 200 status', function() {
			assert.strictEqual(this.last.status, 200);
		});

		it('should create the task', function(done) {
			this.webservice.tasks.get({}, function(err, tasks) {
				assert.strictEqual(tasks.length, 4);
				done();
			});
		});

		it('should redirect me to the new URL page', function() {
			assert.match(this.last.request.uri.pathname, /^\/[a-z0-9]{24}$/i);
		});

		it('should not display an error message', function() {
			assert.strictEqual(this.last.dom('[data-test=error]').length, 0);
		});

		it('should display a success message', function() {
			var alert = this.last.dom('[data-test=alert]').eq(0);
			assert.isDefined(alert);
			assert.match(alert.textContent, /url has been added/i);
		});

	});

});
