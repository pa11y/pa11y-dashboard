'use strict';

var getStandards = require('../data/standards');

module.exports = route;

// Route definition
function route (app) {

	app.express.get('/new', function (req, res) {
		var standards = getStandards().map(function (standard) {
			if (standard.title === 'WCAG2AA') {
				standard.selected = true;
			}
			return standard;
		});
		res.render('new', {
			standards: standards,
			isNewTaskPage: true
		});
	});

	app.express.post('/new', function (req, res) {
		var newTask = {
			url: req.body.url,
			standard: req.body.standard,
			ignore: req.body.ignore || []
		};
		app.webservice.tasks.create(newTask, function (err, task) {
			if (err) {
				var standards = getStandards().map(function (standard) {
					if (standard.title === newTask.standard) {
						standard.selected = true;
					}
					standard.rules = standard.rules.map(function (rule) {
						if (newTask.ignore.indexOf(rule.name) !== -1) {
							rule.ignored = true;
						}
						return rule;
					});
					return standard;
				});
				return res.render('new', {
					error: err,
					standards: standards,
					task: newTask
				});
			}
			res.redirect('/' + task.id + '?added');
		});
	});

}
