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

// jscs:disable requireArrowFunctions
'use strict';

const config = require('../../config/test.json');
const createNavigator = require('./helper/navigate');
const createWebserviceClient = require('./helper/webservice');
const loadFixtures = require('pa11y-webservice/data/fixture/load');
const request = require('request');

// Run before all tests
before(function(done) {
	this.baseUrl = `http://localhost:${config.port}`;
	this.last = {};
	this.navigate = createNavigator(this.baseUrl, this.last);
	this.webservice = createWebserviceClient(config);
	assertTestAppIsRunning(this.baseUrl, () => {
		loadFixtures('test', config.webservice, done);
	});
});

// Run after each test
afterEach(function(done) {
	loadFixtures('test', config.webservice, done);
});

// Check that the test application is running, and exit if not
function assertTestAppIsRunning(url, done) {
	request(url, error => {
		if (error) {
			console.error('Error: Test app not started; run with `NODE_ENV=test node index.js`');
			process.exit(1);
		}
		done();
	});
}
