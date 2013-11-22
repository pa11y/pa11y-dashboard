/* global beforeEach, describe, it */
/* jshint maxlen: false, maxstatements: false */
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

		it('should display all of the expected tasks', function () {
			var tasks = this.last.dom.querySelectorAll('[data-test=task]');
			assert.strictEqual(tasks.length, 3);
			assert.match(tasks[0].textContent, /npg home\s+\(wcag2aa\)/i);
			assert.match(tasks[1].textContent, /npg home\s+\(wcag2aaa\)/i);
			assert.match(tasks[2].textContent, /nature news\s+\(section508\)/i);
		});

		it('should have links to each task', function () {
			var tasks = this.last.dom.querySelectorAll('[data-test=task]');
			assert.strictEqual(tasks[0].querySelectorAll('[href="/abc000000000000000000001"]').length, 1);
			assert.strictEqual(tasks[1].querySelectorAll('[href="/abc000000000000000000002"]').length, 1);
			assert.strictEqual(tasks[2].querySelectorAll('[href="/abc000000000000000000003"]').length, 1);
		});

		it('should display a delete button for each task', function () {
			var tasks = this.last.dom.querySelectorAll('[data-test=task]');
			assert.strictEqual(tasks[0].querySelectorAll('[href="/abc000000000000000000001/delete"]').length, 1);
			assert.strictEqual(tasks[1].querySelectorAll('[href="/abc000000000000000000002/delete"]').length, 1);
			assert.strictEqual(tasks[2].querySelectorAll('[href="/abc000000000000000000003/delete"]').length, 1);
		});

		it('should display the task result counts if the task has been run', function () {
			var tasks = this.last.dom.querySelectorAll('[data-test=task]');
			assert.match(tasks[0].textContent, /1\s*errors/i);
			assert.match(tasks[0].textContent, /2\s*warnings/i);
			assert.match(tasks[0].textContent, /3\s*notices/i);
		});

		it('should display a message indicating that there are no results if the task has not been run', function () {
			var tasks = this.last.dom.querySelectorAll('[data-test=task]');
			assert.match(tasks[2].textContent, /no results/i);
		});

		it('should not display an alert message', function () {
			assert.strictEqual(this.last.dom.querySelectorAll('[data-test=alert]').length, 0);
		});

	});

});
