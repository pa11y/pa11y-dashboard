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

describe('GET /<task-id>', function() {

	describe('when task has results', function() {

		beforeEach(function(done) {
			const request = {
				method: 'GET',
				endpoint: '/abc000000000000000000001'
			};
			this.navigate(request, done);
		});

		it('should send a 200 status', function() {
			assert.strictEqual(this.last.status, 200);
		});

		it('should display an "Edit" button', function() {
			assert.strictEqual(this.last.dom('[href="/abc000000000000000000001/edit"]').length, 1);
		});

		it('should display a "Delete" button', function() {
			assert.strictEqual(this.last.dom('[href="/abc000000000000000000001/delete"]').length, 1);
		});

		it('should display a "Run" button', function() {
			assert.strictEqual(this.last.dom('[href="/abc000000000000000000001/run"]').length, 1);
		});

		it('should display a "Download CSV" button for the latest result', function() {
			assert.strictEqual(this.last.dom('[href="/abc000000000000000000001/def000000000000000000001.csv"]').length, 1);
		});

		it('should display a "Download JSON" button for the latest result', function() {
			assert.strictEqual(this.last.dom('[href="/abc000000000000000000001/def000000000000000000001.json"]').length, 1);
		});

		it('should display links to all results', function() {
			assert.isDefined(this.last.dom('[href="/abc000000000000000000001/def000000000000000000001"]').eq(0));
			assert.isDefined(this.last.dom('[href="/abc000000000000000000001/def000000000000000000003"]').eq(0));
		});

		it('should display errors', function() {
			const elem = this.last.dom('[data-test=task-errors]').eq(0);
			assert.isDefined(elem);
			assert.match(elem.text(), /errors \( 1 \)/i);
		});

		it('should display warnings', function() {
			const elem = this.last.dom('[data-test=task-warnings]').eq(0);
			assert.isDefined(elem);
			assert.match(elem.text(), /warnings \( 2 \)/i);
		});

		it('should display notices', function() {
			const elem = this.last.dom('[data-test=task-notices]').eq(0);
			assert.isDefined(elem);
			assert.match(elem.text(), /notices \( 3 \)/i);
		});

	});

	describe('when task has no results', function() {

		beforeEach(function(done) {
			const request = {
				method: 'GET',
				endpoint: '/abc000000000000000000003'
			};
			this.navigate(request, done);
		});

		it('should send a 200 status', function() {
			assert.strictEqual(this.last.status, 200);
		});

		it('should display a "Run" button', function() {
			const elem = this.last.dom('[data-test=run-task]');
			assert.strictEqual(elem.length, 1);
			assert.strictEqual(elem.eq(0).attr('href'), '/abc000000000000000000003/run');
		});

		it('should display a message indicating that there are no results', function() {
			const alert = this.last.dom('[data-test=alert]').eq(0);
			assert.isDefined(alert);
			assert.match(alert.text(), /there are no results to show/i);
		});

	});

});
