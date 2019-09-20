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

const bodyParser = require('body-parser');
const compression = require('compression');
const createClient = require('pa11y-webservice-client-node');
const EventEmitter = require('events').EventEmitter;
const express = require('express');
const hbs = require('express-hbs');
const http = require('http');
const pkg = require('./package.json');

module.exports = initApp;

// Initialise the application
function initApp(config, callback) {
	config = defaultConfig(config);

	let webserviceUrl = config.webservice;
	if (typeof webserviceUrl === 'object') {
		webserviceUrl = `http://${webserviceUrl.host}:${webserviceUrl.port}/`;
	}

	const app = new EventEmitter();
	app.address = null;
	app.express = express();
	app.server = http.createServer(app.express);
	app.webservice = createClient(webserviceUrl);

	// Compression
	app.express.use(compression());

	// Public files
	app.express.use(express.static(`${__dirname}/public`, {
		maxAge: (process.env.NODE_ENV === 'production' ? 604800000 : 0)
	}));

	// General express config
	app.express.disable('x-powered-by');
	app.express.use(bodyParser.urlencoded({
		extended: true
	}));

	// View engine
	app.express.engine('html', hbs.express4({
		extname: '.html',
		contentHelperName: 'content',
		layoutsDir: `${__dirname}/view/layout`,
		partialsDir: `${__dirname}/view/partial`,
		defaultLayout: `${__dirname}/view/layout/default`
	}));
	app.express.set('views', `${__dirname}/view`);
	app.express.set('view engine', 'html');

	// View helpers
	require('./view/helper/date')(hbs);
	require('./view/helper/string')(hbs);
	require('./view/helper/url')(hbs);
	require('./view/helper/conditionals')(hbs);

	// Populate view locals
	app.express.locals = {
		lang: 'en',
		year: (new Date()).getFullYear(),
		version: pkg.version,
		repo: pkg.homepage,
		bugtracker: pkg.bugs,
		noindex: config.noindex,
		readonly: config.readonly,
		siteMessage: config.siteMessage,
		settings: {}
	};

	app.express.use((request, response, next) => {
		response.locals.isHomePage = (request.path === '/');
		response.locals.host = request.hostname;
		next();
	});

	// Load routes
	require('./route/index')(app);
	require('./route/task/index')(app);
	require('./route/result/download')(app);
	if (!config.readonly) {
		require('./route/new')(app);
		require('./route/task/delete')(app);
		require('./route/task/run')(app);
		require('./route/task/edit')(app);
		require('./route/task/ignore')(app);
		require('./route/task/unignore')(app);
	}
	// Needs to be loaded after `/route/task/edit`
	require('./route/result/index')(app);

	// Error handling
	app.express.get('*', (request, response) => {
		response.status(404);
		response.render('404');
	});
	app.express.use((error, request, response, next) => {
		/* eslint no-unused-vars: 'off' */
		if (error.code === 'ECONNREFUSED') {
			error = new Error('Could not connect to Pa11y Webservice');
		}
		app.emit('route-error', error);
		if (process.env.NODE_ENV !== 'production') {
			response.locals.error = error;
		}
		response.status(500);
		response.render('500');
	});

	app.server.listen(config.port, error => {
		const address = app.server.address();
		app.address = `http://${address.address}:${address.port}`;
		callback(error, app);
	});

}

// Get default configurations
function defaultConfig(config) {
	if (typeof config.noindex !== 'boolean') {
		config.noindex = true;
	}
	if (typeof config.readonly !== 'boolean') {
		config.readonly = false;
	}
	return config;
}
