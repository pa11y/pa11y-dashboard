'use strict';

var jsdom = require('jsdom');
var request = require('request');

module.exports = createNavigator;

// Create a navigate function
function createNavigator (baseUrl, store) {
	return function (opts, callback) {

		store.body = null;
		store.dom = null;
		store.request = null;
		store.response = null;
		store.status = null;
		store.window = null;

		request({
			url: baseUrl + opts.endpoint,
			method: opts.method || 'GET',
			body: opts.body,
			json: true,
			qs: opts.query,
			followAllRedirects: true
		}, function (err, res, body) {

			store.body = body;
			store.request = res.request;
			store.response = res;
			store.status = res.statusCode;

			if (opts.nonDom) {
				store.window = null;
				store.dom = null;
				callback();
			} else {
				jsdom.env(
					store.body,
					function (err, window) {
						store.window = window;
						store.dom = window.document;
						callback();
					}
				);
			}

		});

	};
}
