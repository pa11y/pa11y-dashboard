'use strict';

module.exports = route;

// Route definition
function route (app) {
	app.express.get('/:id', function (req, res, next) {
		app.webservice.task(req.params.id).get({}, function (err, task) {
			if (err) {
				return next();
			}
			app.webservice.task(req.params.id).results({full: true}, function (err, results) {
				if (err) {
					return next(err);
				}
				res.render('task', {
					task: task,
					results: results,
					added: (typeof req.query.added !== 'undefined')
				});
			});
		});
	});
}
