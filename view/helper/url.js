'use strict';

module.exports = helper;

function helper (register) {

	// Simplify url by removing (eg http://, https://, trailing slashes) from url
	register('simplify-url', function (context) {
		return context.replace(/^https?:\/\//i, '').replace(/\/$/, '').toLowerCase();
	});

}
