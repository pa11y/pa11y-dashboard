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

const getStandards = require('../../data/standards');

module.exports = route;

// Route definition
function route(app) {
	app.express.post('/import', (request, response) => {
		if (!request.files.tasks) {
			response.statusCode = 403;
			return response.end();
		}
		const tasks = JSON.parse(request.files.tasks.data.toString('utf8'));
		const creator = initialiseCreator(app.webservice.tasks);
		Promise.all(tasks.map(creator)).then(() => {
			response.redirect('/');
		}).catch(error => {
			response.render('new', JSON.parse(error.message));
		});
	});
}

const initialiseCreator = app => {
	return newTask => new Promise((resolve, reject) => {
		delete newTask.id;
		app.create(newTask, (error, task) => {
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
				return reject(new Error(JSON.stringify({
					error,
					standards,
					task: newTask
				})));
			}
			return resolve(task);
		});
	});
};
