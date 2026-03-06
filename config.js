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

const fs = require('fs');

const environment = (process.env.NODE_ENV || 'development');
const jsonPath = `./config/${environment}.json`;
const jsPath = `./config/${environment}.js`;

if (fs.existsSync(jsonPath)) {
	module.exports = require(jsonPath);
} else if (fs.existsSync(jsPath)) {
	module.exports = require(jsPath);
} else {
	const webserviceConfig = {
		database: env('WEBSERVICE_DATABASE', 'mongodb://localhost/pa11y-webservice'),
		host: env('WEBSERVICE_HOST', '0.0.0.0'),
		port: Number(env('WEBSERVICE_PORT', '3000')),
		cron: env('WEBSERVICE_CRON', false)
	};

	const chromiumFlags = env('CHROMIUM_FLAGS', undefined);
	const chromiumExecutable = env('CHROMIUM_EXECUTABLE', undefined);
	if (chromiumFlags || chromiumExecutable) {
		webserviceConfig.chromeLaunchConfig = {};
		if (chromiumFlags) {
			webserviceConfig.chromeLaunchConfig.args = chromiumFlags.split(',');
		}
		if (chromiumExecutable) {
			webserviceConfig.chromeLaunchConfig.executablePath = chromiumExecutable;
		}
	}

	module.exports = {
		port: Number(env('PORT', '4000')),
		noindex: env('NOINDEX', 'true') === 'true',
		readonly: env('READONLY', 'false') === 'true',
		webservice: env('WEBSERVICE_URL', webserviceConfig)
	};
}

function env(name, defaultValue) {
	const value = process.env[name];
	return typeof value === 'string' ? value : defaultValue;
}
