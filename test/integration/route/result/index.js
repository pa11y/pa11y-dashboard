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

describe('GET /<task-id>/<result-id>', function () {

	beforeEach(function (done) {
		var req = {
			method: 'GET',
			endpoint: '/abc000000000000000000001/def000000000000000000001'
		};
		this.navigate(req, done);
	});

	it('should send a 200 status', function () {
		assert.strictEqual(this.last.status, 200);
	});

	it('should display a "Download CSV" button', function () {
		var elem = this.last.dom.querySelectorAll('[data-test=download-csv]');
		assert.strictEqual(elem.length, 1);
		assert.strictEqual(elem[0].getAttribute('href'), '/abc000000000000000000001/def000000000000000000001.csv');
	});

	it('should display a "Download JSON" button', function () {
		var elem = this.last.dom.querySelectorAll('[data-test=download-json]');
		assert.strictEqual(elem.length, 1);
		assert.strictEqual(elem[0].getAttribute('href'), '/abc000000000000000000001/def000000000000000000001.json');
	});

	it('should display a link back to the task', function () {
		assert.isDefined(this.last.dom.querySelectorAll('[href="/abc000000000000000000001"]')[0]);
	});

	it('should display errors', function () {
		var elem = this.last.dom.querySelectorAll('[data-test=task-errors]')[0];
		assert.isDefined(elem);
		assert.match(elem.textContent, /errors \( 1 \)/i);
	});

	it('should display warnings', function () {
		var elem = this.last.dom.querySelectorAll('[data-test=task-warnings]')[0];
		assert.isDefined(elem);
		assert.match(elem.textContent, /warnings \( 2 \)/i);
	});

	it('should display notices', function () {
		var elem = this.last.dom.querySelectorAll('[data-test=task-notices]')[0];
		assert.isDefined(elem);
		assert.match(elem.textContent, /notices \( 3 \)/i);
	});

});
