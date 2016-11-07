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

	app.express.get('/new', (req, res) => {
		const standards = getStandards().map(standard => {
			if (standard.title === 'WCAG2AA') {
				standard.selected = true;
			}
			return standard;
		});
		res.render('new', {
			standards: standards,
			isNewTaskPage: true
		});
	});

	app.express.post('/new', (req, res) => {

		let parsedHeaders;
		if (req.body.headers) {
			parsedHeaders = httpHeaders(req.body.headers, true);
		}
		console.log(parsedHeaders);

		const newTask = {
			name: req.body.name,
			url: req.body.url,
			standard: req.body.standard,
			ignore: req.body.ignore || [],
			timeout: req.body.timeout || undefined,
			wait: req.body.wait || undefined,
			username: req.body.username || undefined,
			password: req.body.password || undefined,
			headers: parsedHeaders,
			hideElements: req.body.hideElements || undefined
		};

		app.webservice.tasks.create(newTask, (err, task) => {
			if (err) {
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
				return res.render('new', {
					error: err,
					standards: standards,
					task: newTask
				});
			}
			res.redirect(`/${task.id}?added`);
		});
	});

}
