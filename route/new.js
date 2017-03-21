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

const getStandards = require('../data/standards');
const httpHeaders = require('http-headers');

module.exports = route;

// Route definition
function route(app) {

	app.express.get('/new', (request, response) => {
		const standards = getStandards().map(standard => {
			if (standard.title === 'WCAG2AA') {
				standard.selected = true;
			}
			return standard;
		});
		response.render('new', {
			standards: standards,
			isNewTaskPage: true
		});
	});

	app.express.post('/new', (request, response) => {

		let parsedActions;
		if (request.body.actions) {
			parsedActions = request.body.actions.split(/[\r\n]+/)
				.map(action => {
					return action.trim();
				})
				.filter(action => {
					return Boolean(action);
				});
		}

		let parsedHeaders;
		if (request.body.headers) {
			parsedHeaders = httpHeaders(request.body.headers, true);
		}

		const newTask = {
			name: request.body.name,
			url: request.body.url,
			standard: request.body.standard,
			ignore: request.body.ignore || [],
			timeout: request.body.timeout || undefined,
			wait: request.body.wait || undefined,
			actions: parsedActions,
			username: request.body.username || undefined,
			password: request.body.password || undefined,
			headers: parsedHeaders,
			hideElements: request.body.hideElements || undefined
		};

		app.webservice.tasks.create(newTask, (error, task) => {
			if (error) {
				const standards = getStandards().map(standard => {
					if (standard.title === newTask.standard) {
						standard.selected = true;
					}
					standard.rules = standard.rules.map(rule => {
						if (newTask.ignore.indexOf(rule.name) !== -1) {
							rule.ignored = true;
						}
						return rule;
					});
					return standard;
				});
				newTask.actions = request.body.actions;
				newTask.headers = request.body.headers;
				return response.render('new', {
					error: error,
					standards: standards,
					task: newTask
				});
			}
			response.redirect(`/${task.id}?added`);
		});
	});

}
