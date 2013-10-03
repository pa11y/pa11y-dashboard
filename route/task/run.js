'use strict';

module.exports = route;

// Route definition
function route (app) {

	app.express.get('/:id/run', function (req, res, next) {
		app.webservice.task(req.params.id).run(function (err, task) {
			if (err) {
				return next();
			}
			res.redirect('/' + req.params.id + '?running');
		});
	});

}
