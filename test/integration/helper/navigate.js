// This file is part of pa11y-dashboard.
//
// pa11y-dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// pa11y-dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with pa11y-dashboard.  If not, see <http://www.gnu.org/licenses/>.

'use strict';

var jsdom = require('jsdom');
var request = require('request');

module.exports = createNavigator;

// Create a navigate function
function createNavigator(baseUrl, store) {
	return function(opts, callback) {

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
		}, function(err, res, body) {

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
					function(err, window) {
						store.window = window;
						store.dom = window.document;
						callback();
					}
				);
			}

		});

	};
}
