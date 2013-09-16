'use strict';

var moment = require('moment');

module.exports = helper;

function helper (register) {

	// Format a date with Moment
	register('date-format', function (context, block) {
		var format = block.hash.format || 'YYYY-MM-DD HH:mm:ss';
		return moment(context).format(format);
	});

	// Get a relative date
	register('date-relative', function (context) {
		return moment(context).fromNow();
	});

};
