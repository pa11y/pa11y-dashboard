'use strict';

var _ = require('underscore');

module.exports = route;

// Route definition
function route (app) {

	app.express.get('/:id/delete', function (req, res, next) {
		app.webservice.task(req.params.id).get({}, function (err, task) {
			if (err) {
				return next();
			}
			res.render('task/delete', {
				task: task
			});
		});
	});

	app.express.post('/:id/delete', function (req, res, next) {
		app.webservice.task(req.params.id).remove(function (err) {
			if (err) {
				return next();
			}
			res.redirect('/?deleted');
		});
	});

}
