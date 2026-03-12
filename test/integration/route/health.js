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
'use strict';

const assert = require('proclaim');

describe('GET /health', function() {
	beforeEach(function(done) {
		const request = {
			method: 'GET',
			endpoint: '/health',
			nonDom: true
		};
		this.navigate(request, done);
	});

	it('should send a 200 status', function() {
		assert.strictEqual(this.last.status, 200);
	});

	it('should respond with JSON', function() {
		const contentType = this.last.response.headers.get('content-type');
		assert.include(contentType, 'application/json');
	});

	it('should report a healthy status', function() {
		assert.isObject(this.last.body);
		assert.strictEqual(this.last.body.status, 'ok');
	});

	it('should not include unexpected properties', function() {
		const keys = Object.keys(this.last.body);
		assert.deepStrictEqual(keys, ['status']);
	});
});
