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

var chalk = require('chalk');
var config = require('./config/' + (process.env.NODE_ENV || 'development') + '.json');

process.on('SIGINT', function() {
	console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
	process.exit();
});

require('./app')(config, function(err, app) {

	console.log('');
	console.log(chalk.underline.magenta('pa11y-dashboard started'));
	console.log(chalk.grey('mode: %s'), process.env.NODE_ENV);
	console.log(chalk.grey('uri:  %s'), app.address);

	app.on('route-error', function(err) {
		var stack = (err.stack ? err.stack.split('\n') : [err.message]);
		var msg = chalk.red(stack.shift());
		console.error('');
		console.error(msg);
		console.error(chalk.grey(stack.join('\n')));
	});

	// Start the webservice if required
	if (typeof config.webservice === 'object') {
		require('pa11y-webservice')(config.webservice, function(err, webservice) {
			console.log('');
			console.log(chalk.underline.cyan('pa11y-webservice started'));
			console.log(chalk.grey('mode: %s'), process.env.NODE_ENV);
			console.log(chalk.grey('uri:  %s'), webservice.server.info.uri);
		});
	}

});
