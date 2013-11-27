'use strict';

var _ = require('underscore');
var presentTask = require('../../view/presenter/task');

module.exports = route;

// Route definition
function route (app) {

	app.express.get('/:id/edit', function (req, res, next) {
		app.webservice.task(req.params.id).get({}, function (err, task) {
			if (err) {
				return next();
			}
			res.render('task/edit', {
				task: presentTask(task),
				isTaskPage: true
			});
		});
	});

	app.express.post('/:id/edit', function (req, res, next) {
		app.webservice.task(req.params.id).remove(function (err) {
			if (err) {
				return next();
			}
			res.redirect('index');
		});
	});

}
