'use strict';

module.exports = route;

// Route definition
function route(app) {

	app.express.post('/:id/ignore', (request, response, next) => {
		app.webservice.task(request.params.id).get({}, (error, task) => {
			if (error) {
				return next();
			}
			const edit = {
				name: task.name,
				ignore: task.ignore
			};
			if (typeof request.body.rule === 'string') {
				edit.ignore.push(request.body.rule);
			}
			app.webservice.task(request.params.id).edit(edit, () => {
				response.redirect(`/${request.params.id}?rule-ignored`);
			});
		});
	});

}
