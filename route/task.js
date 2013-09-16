'use strict';

var _ = require('underscore');

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
				results.forEach(function (result) {
					var grouped = _.groupBy(result.results, 'code');
					result.messages = _.keys(grouped).map(function (group) {
						grouped[group][0].count = grouped[group].length;
						return grouped[group][0];
					});
				});
				res.render('task', {
					task: task,
					results: results,
					added: (typeof req.query.added !== 'undefined')
				});
			});
		});
	});
}
