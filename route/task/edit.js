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

/*jshint maxcomplexity:8*/

'use strict';

const presentTask = require('../../view/presenter/task');
const getStandards = require('../../data/standards');
const httpHeaders = require('http-headers');

module.exports = route;

// Route definition
function route(app) {

	app.express.get('/:id/edit', (req, res, next) => {
		app.webservice.task(req.params.id).get({}, (err, task) => {
			if (err) {
				return next();
			}
			const standards = getStandards().map(standard => {
				if (standard.title === task.standard) {
					standard.selected = true;
				}
				standard.rules = standard.rules.map(rule => {
					if (task.ignore.indexOf(rule.name) !== -1) {
						rule.ignored = true;
					}
					return rule;
				});
				return standard;
			});
			res.render('task/edit', {
				edited: (typeof req.query.edited !== 'undefined'),
				standards: standards,
				task: presentTask(task),
				isTaskSubPage: true
			});
		});
	});

	app.express.post('/:id/edit', (req, res, next) => {
		app.webservice.task(req.params.id).get({}, (err, task) => {
			if (err) {
				return next();
			}
			const originalHeaders = req.body.headers;
			req.body.ignore = req.body.ignore || [];
			req.body.timeout = req.body.timeout || undefined;
			req.body.wait = req.body.wait || undefined;
			req.body.username = req.body.username || undefined;
			req.body.password = req.body.password || undefined;
			req.body.hideElements = req.body.hideElements || undefined;
			req.body.headers = httpHeaders(req.body.headers || '', true);
			app.webservice.task(req.params.id).edit(req.body, err => {
				if (err) {
					task.name = req.body.name;
					task.ignore = req.body.ignore;
					task.timeout = req.body.timeout;
					task.wait = req.body.wait;
					task.username = req.body.username;
					task.password = req.body.password;
					task.headers = originalHeaders;
					task.hideElements = req.body.hideElements;
					const standards = getStandards().map(standard => {
						if (standard.title === task.standard) {
							standard.selected = true;
						}
						standard.rules = standard.rules.map(rule => {
							if (task.ignore.indexOf(rule.name) !== -1) {
								rule.ignored = true;
							}
							return rule;
						});
						return standard;
					});
					return res.render('task/edit', {
						error: err,
						standards: standards,
						task: task,
						isTaskSubPage: true
					});
				}
				res.redirect(`/${req.params.id}/edit?edited`);
			});
		});
	});

}
