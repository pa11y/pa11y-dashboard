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

const {promisify} = require('util');
const createNavigator = require('./helper/navigate');
const createWebserviceClient = require('pa11y-webservice-client-node');

const loadFixtures = promisify(require('pa11y-webservice/data/fixture/load'));

const config = {
	host: '0.0.0.0',
	port: 4000,
	noindex: true,
	readonly: false
};

const webserviceConfig = {
	database: process.env.WEBSERVICE_DATABASE || 'mongodb://127.0.0.1/pa11y-webservice-test',
	host: process.env.WEBSERVICE_HOST || '0.0.0.0',
	port: Number(process.env.WEBSERVICE_PORT) || 3000,
	cron: process.env.WEBSERVICE_CRON || '0 30 0 * * *'
};

async function assertServiceIsAvailable(baseUrl) {
	try {
		const response = await fetch(baseUrl);
		if (!response.ok) {
			console.error('Service found but returned an error. HTTP status:', response.status);
			throw Error();
		}
	} catch (error) {
		console.error('Service under test not found or returned error.');
		throw error;
	}
}

before(async function() {
	this.baseUrl = `http://${config.host}:${config.port}`;

	await assertServiceIsAvailable(this.baseUrl);
	await loadFixtures('test', webserviceConfig);

	this.webservice = createWebserviceClient(`http://${webserviceConfig.host}:${webserviceConfig.port}/`);

	this.last = {};
	this.navigate = createNavigator(this.baseUrl, this.last);
});

afterEach(async function() {
	await loadFixtures('test', config.webservice);
});
