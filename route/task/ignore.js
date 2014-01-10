'use strict';

var _ = require('underscore');
var presentTask = require('../../view/presenter/task');
var getStandards = require('../../data/standards');

module.exports = route;

// Route definition
function route (app) {

	app.express.post('/:id/ignore', function (req, res, next) {
		app.webservice.task(req.params.id).get({}, function (err, task) {
			if (err) {
				return next();
			}
			var edit = {
				name: task.name,
				ignore: task.ignore
			};
			if (typeof req.body.rule === 'string') {
				edit.ignore.push(req.body.rule);
			}
			app.webservice.task(req.params.id).edit(edit, function () {
				res.redirect('/' + req.params.id + '?rule-ignored');
			});
		});
	});

}
