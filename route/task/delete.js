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

module.exports = route;

// Route definition
function route(app) {

	app.express.get('/:id/delete', (request, response, next) => {
		app.webservice.task(request.params.id).get({}, (error, task) => {
			if (error) {
				return next();
			}
			response.render('task/delete', {
				task: presentTask(task),
				isTaskSubPage: true
			});
		});
	});

	app.express.post('/:id/delete', (request, response, next) => {
		app.webservice.task(request.params.id).remove(error => {
			if (error) {
				return next();
			}
			response.redirect('/?deleted');
		});
	});

}
