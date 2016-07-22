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

const presentTask = require('../../view/presenter/task');
const presentResult = require('../../view/presenter/result');

module.exports = route;

// Route definition
function route(app) {

	app.express.get('/:id/:rid', (req, res, next) => {
		app.webservice.task(req.params.id).get({}, (err, task) => {
			if (err) {
				return next();
			}
			app.webservice
				.task(req.params.id)
				.result(req.params.rid)
				.get({full: true}, (err, result) => {
					if (err) {
						return next();
					}
					res.render('result', {
						task: presentTask(task),
						mainResult: presentResult(result),
						isResultPage: true
					});
				});
		});
	});

}
