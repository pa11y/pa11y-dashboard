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

describe('GET /', function () {

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

	it('should display an "Add new URL" button', function () {
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

	it('should display an "Edit" button for each task', function () {
		var tasks = this.last.dom.querySelectorAll('[data-test=task]');
		assert.strictEqual(tasks[0].querySelectorAll('[href="/abc000000000000000000001/edit"]').length, 1);
		assert.strictEqual(tasks[1].querySelectorAll('[href="/abc000000000000000000002/edit"]').length, 1);
		assert.strictEqual(tasks[2].querySelectorAll('[href="/abc000000000000000000003/edit"]').length, 1);
	});

	it('should display a "Delete" button for each task', function () {
		var tasks = this.last.dom.querySelectorAll('[data-test=task]');
		assert.strictEqual(tasks[0].querySelectorAll('[href="/abc000000000000000000001/delete"]').length, 1);
		assert.strictEqual(tasks[1].querySelectorAll('[href="/abc000000000000000000002/delete"]').length, 1);
		assert.strictEqual(tasks[2].querySelectorAll('[href="/abc000000000000000000003/delete"]').length, 1);
	});

	it('should display a "Run" button for each task', function () {
		var tasks = this.last.dom.querySelectorAll('[data-test=task]');
		assert.strictEqual(tasks[0].querySelectorAll('[href="/abc000000000000000000001/run"]').length, 1);
		assert.strictEqual(tasks[1].querySelectorAll('[href="/abc000000000000000000002/run"]').length, 1);
		assert.strictEqual(tasks[2].querySelectorAll('[href="/abc000000000000000000003/run"]').length, 1);
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
