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
					hasOneResult: (presentedResults.length < 2),
					isTaskPage: true
				});
			});
		});
	});

}
