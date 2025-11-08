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
'use strict';

const cheerio = require('cheerio');

function buildUrl(baseUrl, opts) {
	const url = new URL(opts.endpoint, baseUrl);
	if (opts.query) {
		Object.keys(opts.query).forEach(key => {
			url.searchParams.append(key, opts.query[key]);
		});
	}
	return url;
}

function buildFormData(formData) {
	const params = new URLSearchParams();
	Object.keys(formData).forEach(key => {
		const value = formData[key];
		if (Array.isArray(value)) {
			value.forEach(item => params.append(key, item));
		} else {
			params.append(key, value);
		}
	});
	return params;
}

function buildFetchOptions(opts) {
	const fetchOptions = {
		method: opts.method || 'GET',
		redirect: 'follow'
	};

	if (opts.form) {
		fetchOptions.body = buildFormData(opts.form);
		fetchOptions.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
	}

	if (opts.json && typeof opts.json === 'object') {
		fetchOptions.body = JSON.stringify(opts.json);
		fetchOptions.headers = {'Content-Type': 'application/json'};
	}

	return fetchOptions;
}

function parseResponseBody(response) {
	const contentType = response.headers.get('content-type') || '';
	if (contentType.includes('application/json')) {
		return response.json();
	}
	return response.text();
}

function saveRequest(store, response, body, opts) {
	const finalUrl = new URL(response.url);
	store.body = body;
	store.request = {
		uri: {
			href: response.url,
			pathname: finalUrl.pathname,
			search: finalUrl.search,
			hash: finalUrl.hash
		},
		method: opts.method || 'GET'
	};
	store.response = response;
	store.status = response.status;
	store.dom = opts.nonDom ? null : cheerio.load(store.body);
}

function resetSavedRequest(store) {
	store.body = null;
	store.dom = null;
	store.request = null;
	store.response = null;
	store.status = null;
}

function createNavigator(baseUrl, store) {
	return async function(opts, callback) {
		resetSavedRequest(store);

		try {
			const url = buildUrl(baseUrl, opts);
			const fetchOptions = buildFetchOptions(opts);
			const response = await fetch(url.toString(), fetchOptions);
			const body = await parseResponseBody(response);

			saveRequest(store, response, body, opts);

			return callback();
		} catch (error) {
			return callback(error);
		}
	};
}

module.exports = createNavigator;
