'use strict';

var _ = require('underscore');
var presentTask = require('../../view/presenter/task');
var getStandards = require('../../data/standards');

module.exports = route;

// Route definition
function route (app) {

	app.express.get('/:id/edit', function (req, res, next) {
		app.webservice.task(req.params.id).get({}, function (err, task) {
			if (err) {
				return next();
			}
			var standards = getStandards().map(function (standard) {
				if (standard.title === task.standard) {
					standard.selected = true;
				}
				standard.rules = standard.rules.map(function (rule) {
					if (task.ignore.indexOf(rule.name) !== -1) {
						rule.ignored = true;
					}
					return rule;
				});
				return standard;
			});
			res.render('task/edit', {
				edited: (typeof req.query.edited !== 'undefined'),
				standards: standards,
				task: presentTask(task),
				isTaskSubPage: true
			});
		});
	});

	app.express.post('/:id/edit', function (req, res, next) {
		app.webservice.task(req.params.id).get({}, function (err, task) {
			if (err) {
				return next();
			}
			req.body.ignore = req.body.ignore || [];
			app.webservice.task(req.params.id).edit(req.body, function (err) {
				if (err) {
					task.name = req.body.name;
					task.ignore = req.body.ignore;
					var standards = getStandards().map(function (standard) {
						if (standard.title === task.standard) {
							standard.selected = true;
						}
						standard.rules = standard.rules.map(function (rule) {
							if (task.ignore.indexOf(rule.name) !== -1) {
								rule.ignored = true;
							}
							return rule;
						});
						return standard;
					});
					return res.render('task/edit', {
						error: err,
						standards: standards,
						task: task,
						isTaskSubPage: true
					});
				}
				res.redirect('/' + req.params.id + '/edit?edited');
			});
		});
	});

}
