'use strict';

module.exports = route;

// Route definition
function route(app) {

	app.express.post('/:id/unignore', (request, response, next) => {
		app.webservice.task(request.params.id).get({}, (error, task) => {
			if (error) {
				return next();
			}
			const edit = {
				name: task.name,
				ignore: task.ignore
			};
			const indexOfRule = edit.ignore.indexOf(request.body.rule);
			if (typeof request.body.rule === 'string' && indexOfRule !== -1) {
				edit.ignore.splice(indexOfRule, 1);
			}
			app.webservice.task(request.params.id).edit(edit, () => {
				response.redirect(`/${request.params.id}?rule-unignored`);
			});
		});
	});

}
