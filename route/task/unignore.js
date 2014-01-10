'use strict';

var _ = require('underscore');
var presentTask = require('../../view/presenter/task');
var getStandards = require('../../data/standards');

module.exports = route;

// Route definition
function route (app) {

	app.express.post('/:id/unignore', function (req, res, next) {
		app.webservice.task(req.params.id).get({}, function (err, task) {
			if (err) {
				return next();
			}
			var edit = {
				name: task.name,
				ignore: task.ignore
			};
			var indexOfRule = edit.ignore.indexOf(req.body.rule);
			if (typeof req.body.rule === 'string' && indexOfRule !== -1) {
				edit.ignore.splice(indexOfRule, 1);
			}
			app.webservice.task(req.params.id).edit(edit, function () {
				res.redirect('/' + req.params.id + '?rule-unignored');
			});
		});
	});

}
