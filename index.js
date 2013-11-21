'use strict';

var chalk = require('chalk');
var config = require('./config/' + (process.env.NODE_ENV || 'development') + '.json');

require('./app')(config, function (err, app) {

	console.log('');
	console.log(chalk.underline.magenta('pa11y-dashboard started'));
	console.log(chalk.grey('mode: %s'), process.env.NODE_ENV);
	console.log(chalk.grey('uri:  %s'), app.address);

	app.on('route-error', function (err) {
		var stack = (err.stack ? err.stack.split('\n') : [err.message]);
		var msg = chalk.red(stack.shift());
		console.error('');
		console.error(msg);
		console.error(chalk.grey(stack.join('\n')));
	});

	// Start the webservice if required
	if (typeof config.webservice === 'object') {
		require('pa11y-webservice')(config.webservice, function (err, webservice) {
			console.log('');
			console.log(chalk.underline.cyan('pa11y-webservice started'));
			console.log(chalk.grey('mode: %s'), process.env.NODE_ENV);
			console.log(chalk.grey('uri:  %s'), webservice.server.info.uri);
		});
	}

});
