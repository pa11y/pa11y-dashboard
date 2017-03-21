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

describe('GET /<task-id>/delete', function() {

	beforeEach(function(done) {
		const request = {
			method: 'GET',
			endpoint: '/abc000000000000000000001/delete'
		};
		this.navigate(request, done);
	});

	it('should send a 200 status', function() {
		assert.strictEqual(this.last.status, 200);
	});

	it('should have a "Delete URL" form', function() {
		const form = this.last.dom('[data-test=delete-url-form]').eq(0);
		assert.isDefined(form);
		assert.strictEqual(form.attr('action'), '/abc000000000000000000001/delete');
		assert.strictEqual(form.attr('method'), 'post');
	});

	it('should display a link back to the task page', function() {
		assert.greaterThan(this.last.dom('[href="/abc000000000000000000001"]').length, 0);
	});

});

describe('POST /<task-id>/delete', function() {

	beforeEach(function(done) {
		const request = {
			method: 'POST',
			endpoint: '/abc000000000000000000001/delete'
		};
		this.navigate(request, done);
	});

	it('should send a 200 status', function() {
		assert.strictEqual(this.last.status, 200);
	});

	it('should delete the task', function(done) {
		this.webservice.task('abc000000000000000000001').get({}, function(error) {
			assert.strictEqual(error.message, 'Error 404');
			done();
		});
	});

	it('should redirect me to the home page', function() {
		assert.strictEqual(this.last.request.uri.pathname, '/');
	});

	it('should display a success message', function() {
		const alert = this.last.dom('[data-test=alert]').eq(0);
		assert.isDefined(alert);
		assert.match(alert.text(), /been deleted/i);
	});

});
