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

var createClient = require('pa11y-webservice-client-node');

module.exports = createWebserviceClient;

// Create a webservice client
function createWebserviceClient (config) {
	var webserviceUrl = config.webservice;
	if (typeof webserviceUrl === 'object') {
		webserviceUrl = 'http://' + webserviceUrl.host + ':' + webserviceUrl.port + '/';
	}
	return createClient(webserviceUrl);
}
