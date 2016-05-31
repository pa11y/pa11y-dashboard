'use strict';

module.exports = route;

// Route definition
function route(app) {

	app.express.post('/:id/unignore', (req, res, next) => {
		app.webservice.task(req.params.id).get({}, (err, task) => {
			if (err) {
				return next();
			}
			const edit = {
				name: task.name,
				ignore: task.ignore
			};
			const indexOfRule = edit.ignore.indexOf(req.body.rule);
			if (typeof req.body.rule === 'string' && indexOfRule !== -1) {
				edit.ignore.splice(indexOfRule, 1);
			}
			app.webservice.task(req.params.id).edit(edit, () => {
				res.redirect(`/${req.params.id}?rule-unignored`);
			});
		});
	});

}
