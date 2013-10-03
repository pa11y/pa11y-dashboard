'use strict';

var createClient = require('pa11y-webservice-client-node');
var EventEmitter = require('events').EventEmitter;
var express = require('express');
var hbs = require('express-hbs');
var http = require('http');
var lessMiddleware = require('less-middleware');
var pkg = require('./package.json');

module.exports = initApp;

// Initialise the application
function initApp (config, callback) {

	var app = new EventEmitter();
	app.address = null;
	app.express = express();
	app.server = http.createServer(app.express);
	app.webservice = createClient(config.webservice);

	// Public files
	app.express.use(lessMiddleware({
		src: __dirname + '/public/less',
		dest: __dirname + '/public/css',
		prefix: '/css',
		yuicompress: true
	}));
	app.express.use(express.static(__dirname + '/public', {
		maxAge: (process.env.NODE_ENV === 'production' ? 604800 : 0)
	}));

	// General express config
	app.express.disable('x-powered-by');
	app.express.use(express.compress());
	app.express.use(express.bodyParser());

	// View engine
	app.express.set('views', __dirname + '/view');
	app.express.engine('html', hbs.express3({
		extname: '.html',
		contentHelperName: 'content',
		layoutsDir: __dirname + '/view/layout',
		partialsDir: __dirname + '/view/partial',
		defaultLayout: __dirname + '/view/layout/default',
	}));
	app.express.set('view engine', 'html');

	// View helpers
	require('./view/helper/date')(hbs.registerHelper);
	require('./view/helper/url')(hbs.registerHelper);

	// Populate view locals
	app.express.locals({
		lang: 'en',
		year: (new Date()).getFullYear(),
		version : pkg.version,
		repo : pkg.homepage,
		bugtracker : pkg.bugs,
		rules : pkg.snifferules
	});
	app.express.use(function (req, res, next) {
		res.locals.host = req.host;
		next();
	});

	// Load routes
	require('./route/index')(app);
	require('./route/new')(app);
	require('./route/task/index')(app);
	require('./route/task/delete')(app);
	require('./route/task/run')(app);
	require('./route/result/index')(app);
	require('./route/result/download')(app);

	// Error handling
	app.express.get('*', function (req, res) {
		res.status(404);
		res.render('404');
	});
	app.express.use(function (err, req, res, next) {
		/* jshint unused: false */
		if (err.code === 'ECONNREFUSED') {
			err = new Error('Could not connect to pa11y-webservice');
		}
		app.emit('route-error', err);
		if (process.env.NODE_ENV !== 'production') {
			res.locals.error = err;
		}
		res.status(500);
		res.render('500');
	});

	app.server.listen(config.port, function (err) {
		var address = app.server.address();
		app.address = 'http://' + address.address + ':' + address.port;
		callback(err, app);
	});

}
