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

var getStandards = require('../data/standards');

module.exports = route;

// Route definition
function route(app) {

	app.express.get('/new', function(req, res) {
		var standards = getStandards().map(function(standard) {
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

	app.express.post('/new', function(req, res) {
		var newTask = {
			name: req.body.name,
			url: req.body.url,
			standard: req.body.standard,
			ignore: req.body.ignore || [],
			timeout: req.body.timeout,
			wait: req.body.wait,
			username: req.body.username,
			password: req.body.password
		};
		app.webservice.tasks.create(newTask, function(err, task) {
			if (err) {
				var standards = getStandards().map(function(standard) {
					if (standard.title === newTask.standard) {
						standard.selected = true;
					}
					standard.rules = standard.rules.map(function(rule) {
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
			res.redirect('/' + task.id + '?added');
		});
	});

}
