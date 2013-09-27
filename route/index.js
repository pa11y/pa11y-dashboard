'use strict';

var presentTask = require('../view/presenter/task');

module.exports = route;

// Route definition
function route (app) {
	app.express.get('/', function (req, res, next) {
		app.webservice.tasks.get({lastres: true}, function (err, tasks) {
			if (err) {
				return next(err);
			}
			res.render('index', {
				tasks: tasks.map(presentTask),
				deleted: (typeof req.query.deleted !== 'undefined'),
				isHomePage: true
			});
		});
	});
}
