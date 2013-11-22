/* global beforeEach, describe, it */
/* jshint maxlen: false, maxstatements: false */
'use strict';

var assert = require('proclaim');

describe('GET /new', function () {

	describe('with no query', function () {

		beforeEach(function (done) {
			var req = {
				method: 'GET',
				endpoint: '/new'
			};
			this.navigate(req, done);
		});

		it('should send a 200 status', function () {
			assert.strictEqual(this.last.status, 200);
		});

		it('should not display an error message', function () {
			assert.strictEqual(this.last.dom.querySelectorAll('[data-test=error]').length, 0);
		});

		it('should have an "Add new URL" form', function () {
			var form = this.last.dom.querySelectorAll('[data-test=new-url-form]')[0];
			assert.isDefined(form);
			assert.strictEqual(form.getAttribute('action'), '/new');
			assert.strictEqual(form.getAttribute('method'), 'post');
		});

		describe('"Add New URL" form', function () {

			beforeEach(function () {
				this.form = this.last.dom.querySelectorAll('[data-test=new-url-form]')[0];
			});

			it('should have a "name" field', function () {
				var field = this.form.querySelectorAll('input[name=name]')[0];
				assert.isDefined(field);
				assert.strictEqual(field.getAttribute('type'), 'text');
				assert.strictEqual(field.getAttribute('value'), '');
			});

			it('should have a "url" field', function () {
				var field = this.form.querySelectorAll('input[name=url]')[0];
				assert.isDefined(field);
				assert.strictEqual(field.getAttribute('type'), 'url');
				assert.strictEqual(field.getAttribute('value'), '');
			});

			it('should have a "standard" field', function () {
				var field = this.form.querySelectorAll('select[name=standard]')[0];
				assert.isDefined(field);
				assert.strictEqual(field.querySelectorAll('option').length, 4);
			});

			it('should have "ignore" fields', function () {
				var fields = this.form.querySelectorAll('input[name="ignore[]"]');
				assert.isDefined(fields);
				assert.notStrictEqual(fields.length, 0);
			});

		});

	});

});

describe('POST /new', function () {

	describe('with invalid query', function () {

		beforeEach(function (done) {
			var req = {
				method: 'POST',
				endpoint: '/new',
				body: {
					name: '',
					url: ''
				}
			};
			this.navigate(req, done);
		});

		it('should send a 200 status', function () {
			assert.strictEqual(this.last.status, 200);
		});

		it('should display an error message', function () {
			assert.strictEqual(this.last.dom.querySelectorAll('[data-test=error]').length, 1);
		});

	});

	describe('with valid query', function () {

		beforeEach(function (done) {
			var req = {
				method: 'POST',
				endpoint: '/new',
				body: {
					name: 'Example',
					url: 'http://example.com/',
					standard: 'WCAG2AA'
				}
			};
			this.navigate(req, done);
		});

		it('should send a 200 status', function () {
			assert.strictEqual(this.last.status, 200);
		});

		it('should redirect me to the new URL page', function () {
			var title = this.last.dom.querySelectorAll('title')[0];
			assert.isDefined(title);
			assert.match(title.textContent, /example.com/i);
			assert.match(title.textContent, /wcag2aa/i);
		});

		it('should not display an error message', function () {
			assert.strictEqual(this.last.dom.querySelectorAll('[data-test=error]').length, 0);
		});

		it('should display a success message', function () {
			var alert = this.last.dom.querySelectorAll('[data-test=alert]')[0];
			assert.isDefined(alert);
			assert.match(alert.textContent, /url has been added/i);
		});

	});

});
