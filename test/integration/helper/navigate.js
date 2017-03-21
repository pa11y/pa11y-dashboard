// This file is part of Pa11y Dashboard.
//
// Pa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.

// jscs:disable requireArrowFunctions
'use strict';

const cheerio = require('cheerio');
const request = require('request');

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
		}, function(error, response, body) {
			if (error) {
				return callback(error);
			}

			store.body = body;
			store.request = response.request;
			store.response = response;
			store.status = response.statusCode;

			if (opts.nonDom) {
				store.dom = null;
			} else {
				store.dom = cheerio.load(store.body);
			}
			callback();

		});

	};
}
