'use strict';

module.exports = route;

// Route definition
function route (app) {
	app.express.get('/', function (req, res, next) {
		app.webservice.tasks.get(function (err, tasks) {
			if (err) {
				return next(err);
			}
			res.render('index', {
				tasks: tasks
			});
		});
	});
}
