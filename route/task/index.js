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

var presentTask = require('../../view/presenter/task');
var presentResult = require('../../view/presenter/result');
var presentResultList = require('../../view/presenter/result-list');

module.exports = route;

// Route definition
function route (app) {

	app.express.get('/:id', function (req, res, next) {
		app.webservice.task(req.params.id).get({lastres: true}, function (err, task) {
			if (err) {
				return next();
			}
			app.webservice.task(req.params.id).results({}, function (err, results) {
				if (err) {
					return next(err);
				}
				var presentedResults = presentResultList(results.map(presentResult));
				res.render('task', {
					task: presentTask(task),
					results: presentedResults,
					mainResult: task.lastResult || null,
					added: (typeof req.query.added !== 'undefined'),
					running: (typeof req.query.running !== 'undefined'),
					ruleIgnored: (typeof req.query['rule-ignored'] !== 'undefined'),
					ruleUnignored: (typeof req.query['rule-unignored'] !== 'undefined'),
					hasOneResult: (presentedResults.length < 2),
					isTaskPage: true
				});
			});
		});
	});

}
