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

const moment = require('moment');

module.exports = route;

// Route definition
function route(app) {

	function getTaskAndResult(request, response, next) {
		app.webservice.task(request.params.id).get({}, (error, task) => {
			if (error) {
				return next('route');
			}
			app.webservice
				.task(request.params.id)
				.result(request.params.rid)
				.get({full: true}, (webserviceError, result) => {
					if (webserviceError) {
						return next('route');
					}
					response.locals.task = task;
					response.locals.result = result;
					next();
				});
		});
	}

	function getDownloadFileName(task, result, extension) {
		return [
			'pa11y',
			'--',
			task.url
				.replace(/^https?:\/\//i, '')
				.replace(/\/$/, '')
				.replace(/[^a-z0-9.\-_]+/gi, '-'),
			'--',
			task.standard.toLowerCase(),
			'--',
			moment(result.date).format('YYYY-MM-DD'),
			'.',
			extension
		].join('');
	}

	app.express.get('/:id/:rid.csv', getTaskAndResult, (request, response) => {
		const task = response.locals.task;
		const result = response.locals.result;
		const rows = ['"code","message","type","context","selector"'];
		result.results.forEach(msg => {
			rows.push([
				JSON.stringify(msg.code),
				JSON.stringify(msg.message),
				JSON.stringify(msg.type),
				JSON.stringify(msg.context),
				JSON.stringify(msg.selector)
			].join(','));
		});
		response.attachment(getDownloadFileName(task, result, 'csv'));
		response.send(rows.join('\n'));
	});

	app.express.get('/:id/:rid.json', getTaskAndResult, (request, response) => {
		const task = response.locals.task;
		const result = response.locals.result;
		response.attachment(getDownloadFileName(task, result, 'json'));
		delete task.id;
		delete result.id;
		result.task = task;
		response.send(result);
	});

}
