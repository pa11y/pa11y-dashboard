'use strict';

module.exports = route;

// Route definition
function route (app) {
	app.express.get('/new', function (req, res) {
		res.render('new');
	});
}
