/* global afterEach, before */
/* jshint maxlen: false, maxstatements: false */
'use strict';

var config = require('../../config/test.json');
var createNavigator = require('./helper/navigate');
var loadFixtures = require('pa11y-webservice/data/fixture/load');
var request = require('request');

// Run before all tests
before(function (done) {
	this.baseUrl = 'http://localhost:' + config.port;
	this.last = {};
	this.navigate = createNavigator(this.baseUrl, this.last);
	assertTestAppIsRunning(this.baseUrl, function () {
		loadFixtures('test', config.webservice, done);
	});
});

// Run after each test
afterEach(function (done) {
	loadFixtures('test', config.webservice, done);
});

// Check that the test application is running, and exit if not
function assertTestAppIsRunning (url, done) {
	request(url, function (err) {
		if (err) {
			console.error('Error: Test app not started; run with `grunt start-test`');
			process.exit(1);
		}
		done();
	});
}
