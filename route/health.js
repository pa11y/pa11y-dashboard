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

// Health check endpoint for use by load balancers, container orchestrators,
// and platform health monitors (e.g. CloudFoundry).
// Returns 200 if webservice is reachable, or 503 otherwise.
module.exports = function health(app, webserviceUrl) {
	app.express.get('/health', async (request, response) => {
		try {
			// Ping webservice to verify that the chain
			// Dashboard > webservice > MongoDB is operational.
			// eslint-disable-next-line n/no-unsupported-features/node-builtins
			const result = await fetch(webserviceUrl, {
				// CloudFoundry for example has a 1 second timeout for the health check
				// The 750ms timeout aims to keep us within that window
				signal: AbortSignal.timeout(750)
			});
			if (result.ok) {
				return response.status(200).json({
					status: 'ok'
				});
			}
			response.status(503).json({
				status: 'error',
				message: 'webservice responded with an error'
			});
		} catch {
			response.status(503).json({
				status: 'error',
				message: 'webservice unavailable'
			});
		}
	});
};
