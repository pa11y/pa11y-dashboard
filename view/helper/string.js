'use strict';

module.exports = helper;

function helper(hbs) {

	// Convert a string to lower-case
	hbs.registerHelper('lowercase', function(context) {
		return context.toLowerCase();
	});

}
