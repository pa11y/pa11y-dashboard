'use strict';

module.exports = route;

// Route definition
function route (app) {

	app.express.get('/new', function (req, res) {
		res.render('new');
	});

	app.express.post('/new', function (req, res) {
		var newTask = {
			url: req.body.url,
			standard: req.body.standard
		};
		app.webservice.tasks.create(newTask, function (err, task) {
			if (err) {
				return res.render('new', {error: err});
			}
			res.redirect('/' + task.id + '?added');
		});
	});

}
