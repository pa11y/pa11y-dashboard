'use strict';

module.exports = helper;

function helper(hbs) {

	// Convert a string to lower-case
	hbs.registerHelper('lowercase', context => context.toLowerCase());

}
