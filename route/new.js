'use strict';

module.exports = route;

// Route definition
function route (app) {
	app.express.get('/new', function (req, res) {
		res.send('Create a task');
	});
}
