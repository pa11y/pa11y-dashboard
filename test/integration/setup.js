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

var config = require('../../config/test.json');
var createNavigator = require('./helper/navigate');
var createWebserviceClient = require('./helper/webservice');
var loadFixtures = require('pa11y-webservice/data/fixture/load');
var request = require('request');

// Run before all tests
before(function(done) {
	this.baseUrl = 'http://localhost:' + config.port;
	this.last = {};
	this.navigate = createNavigator(this.baseUrl, this.last);
	this.webservice = createWebserviceClient(config);
	assertTestAppIsRunning(this.baseUrl, function() {
		loadFixtures('test', config.webservice, done);
	});
});

// Run after each test
afterEach(function(done) {
	loadFixtures('test', config.webservice, done);
});

// Check that the test application is running, and exit if not
function assertTestAppIsRunning(url, done) {
	request(url, function(err) {
		if (err) {
			console.error('Error: Test app not started; run with `NODE_ENV=test node index.js`');
			process.exit(1);
		}
		done();
	});
}
