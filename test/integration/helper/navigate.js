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

var cheerio = require('cheerio');
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

		request({
			url: baseUrl + opts.endpoint,
			method: opts.method || 'GET',
			form: opts.form,
			json: opts.json || false,
			qs: opts.query,
			followAllRedirects: true
		}, function(err, res, body) {

			store.body = body;
			store.request = res.request;
			store.response = res;
			store.status = res.statusCode;

			if (opts.nonDom) {
				store.dom = null;
			} else {
				store.dom = cheerio.load(store.body);
			}
			callback();

		});

	};
}
