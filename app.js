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
const morgan = require('morgan');
const {nanoid} = require('nanoid');
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

	loadMiddleware(app);

	// View engine
	loadViewEngine(app, config);

	// Load routes
	loadRoutes(app, config);

	// Error handling
	loadErrorHandling(app, config, callback);
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

function loadMiddleware(app) {
	// Compression
	app.express.use(compression());

	// Adds an ID to every request, used later for logging
	app.express.use(addRequestId);

	// Logging middleware
	morgan.token('id', request => {
		return request.id;
	});

	// Log the start of all HTTP requests
	const startLog = '[:date[iso] #:id] Started :method :url for :remote-addr';
	// Immediate: true is required to log the request
	//  before the response happens
	app.express.use(morgan(startLog, {immediate: true}));

	// Log the end of all HTTP requests
	const endLog = '[:date[iso] #:id] Completed :status :res[content-length] in :response-time ms';
	app.express.use(morgan(endLog));

	// Public files
	app.express.use(express.static(`${__dirname}/public`, {
		maxAge: (process.env.NODE_ENV === 'production' ? 604800000 : 0)
	}));

	// General express config
	app.express.disable('x-powered-by');
	app.express.use(bodyParser.urlencoded({
		extended: true
	}));
}

function loadViewEngine(app, config) {
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
}

function loadRoutes(app, config) {
	// Because there's some overlap between the different routes,
	//  they have to be loaded in a specific order in order to avoid
	//  passing mongo the wrong id which would result in
	//  "ObjectID generation failed." errors (e.g. #277)
	require('./route/index')(app);
	require('./route/result/download')(app);

	if (!config.readonly) {
		require('./route/new')(app);
		require('./route/task/delete')(app);
		require('./route/task/run')(app);
		require('./route/task/edit')(app);
		require('./route/task/ignore')(app);
		require('./route/task/unignore')(app);
	}

	// Needs to be loaded after `/route/new`
	require('./route/task/index')(app);
	// Needs to be loaded after `/route/task/edit`
	require('./route/result/index')(app);
}

function loadErrorHandling(app, config, callback) {
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

// Express middleware
function addRequestId(request, response, next) {
	// Create a random request (nano)id, 10 characters long
	// Nano ids are [0-9A-Za-z_-] so chance of collision is 1 in 64^10
	// If a site has so much traffic that this chance is too high
	//  we probably have worse things to worry about
	request.id = nanoid(10);
	next();
}
