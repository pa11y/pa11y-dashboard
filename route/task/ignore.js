'use strict';

module.exports = route;

// Route definition
function route(app) {

	app.express.post('/:id/ignore', (req, res, next) => {
		app.webservice.task(req.params.id).get({}, (err, task) => {
			if (err) {
				return next();
			}
			const edit = {
				name: task.name,
				ignore: task.ignore
			};
			if (typeof req.body.rule === 'string') {
				edit.ignore.push(req.body.rule);
			}
			app.webservice.task(req.params.id).edit(edit, () => {
				res.redirect(`/${req.params.id}?rule-ignored`);
			});
		});
	});

}
