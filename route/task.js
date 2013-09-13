'use strict';

module.exports = route;

// Route definition
function route (app) {
	app.express.get('/:id', function (req, res, next) {
		app.webservice.task(req.params.id).get(function (err, task) {
			if (err) {
				return next();
			}
			res.render('task', {
				task: task
			});
		});
	});
}
