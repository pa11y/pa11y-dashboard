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

const initService = require('pa11y-webservice');
const kleur = require('kleur');

const config = require('./config');
const initDashboard = require('./app');

initDashboard(config, (error, app) => {
	if (error) {
		console.error(error.stack);
		process.exit(1);
	}

	setupSignalHandlers(app);
	logStartup(app);
	setupErrorLogging(app);
	startWebservice();
});

// Handle SIGINT and SIGTERM signals so hopefully in-flight requests and
// Chromium processes are not orphaned on shutdown
function setupSignalHandlers(app) {
	function gracefulShutdown(signal) {
		console.log(`\nGracefully shutting down (${signal})`);
		app.server.close(() => {
			console.log('HTTP server closed');
			process.exit(0);
		});
	}
	process.on('SIGINT', () => gracefulShutdown('SIGINT'));
	process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
}

// Log both the intended URI and the actual bound address, which can differ when
// the OS assigns a different port or the app binds to 0.0.0.0 vs localhost
function logStartup(app) {
	const mode = process.env.NODE_ENV;
	const dashboardAddress = app.server.address();
	console.log(kleur.underline().magenta('\nPa11y Dashboard started'));
	console.log(kleur.grey('mode:               %s'), mode);
	console.log(kleur.grey('uri (intended):     %s'), `http://localhost:${config.port}/`);
	console.log(
		kleur.grey(`uri (actual, ${dashboardAddress.family}): %s`),
		`http://${dashboardAddress.address}:${dashboardAddress.port}/`
	);
}

// Route errors are emitted as events rather than crashing the process
// so they need an explicit listener to be logged
function setupErrorLogging(app) {
	app.on('route-error', routeError => {
		const stack = (routeError.stack ? routeError.stack.split('\n') : [routeError.message]);
		const msg = kleur.red(stack.shift());
		console.error('');
		console.error(msg);
		console.error(kleur.grey(stack.join('\n')));
	});
}

// Start webservice unless we're connecting to an already-running external webservice instead
function startWebservice() {
	if (typeof config.webservice !== 'object') {
		return;
	}
	const mode = process.env.NODE_ENV;
	console.log(kleur.underline().cyan('\nPa11y Webservice starting'));
	initService(config.webservice, (webserviceError, webservice) => {
		if (webserviceError) {
			console.error(webserviceError.stack);
			process.exit(1);
		}
		console.log(kleur.cyan('\nPa11y Webservice started'));
		console.log(kleur.grey('mode:     %s'), mode);
		console.log(kleur.grey('uri:      %s'), webservice.server.info.uri);
		console.log(kleur.grey('database: %s'), config.webservice.database);
		console.log(kleur.grey('cron:     %s'), config.webservice.cron);
	});
}
