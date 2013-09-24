'use strict';

var chalk = require('chalk');
var config = require('./config/' + (process.env.NODE_ENV || 'development') + '.json');

require('./app')(config, function (err, app) {

	console.log('');
	console.log(chalk.underline.magenta('pa11y-dashboard started'));
	console.log(chalk.grey('mode: %s'), process.env.NODE_ENV);
	console.log(chalk.grey('uri:  %s'), app.address);

	app.on('route-error', function (err) {
		if (err.code === 'ECONNREFUSED') {
			console.log(chalk.red('Error: could not connect to pa11y-webservice'));
		}
	});

});
