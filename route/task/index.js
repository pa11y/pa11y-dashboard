'use strict';

var presentTask = require('../../view/presenter/task');
var presentResult = require('../../view/presenter/result');

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
				res.render('task', {
					task: presentTask(task),
					results: results.map(presentResult),
					lastResult: task.lastResult || null,
					added: (typeof req.query.added !== 'undefined')
				});
			});
		});
	});

	app.express.get('/:id.json', function (req, res, next) {
		app.webservice.task(req.params.id).get({}, function (err, task) {
			if (err) {
				return next();
			}
			app.webservice.task(req.params.id).results({}, function (err, results) {
				if (err) {
					return next(err);
				}
				task.results = results;
				res.send(task);
			});
		});
	});

}
