'use strict';

var createClient = require('pa11y-webservice-client-node');

module.exports = createWebserviceClient;

// Create a webservice client
function createWebserviceClient (config) {
	var webserviceUrl = config.webservice;
	if (typeof webserviceUrl == 'object') {
		webserviceUrl = 'http://' + webserviceUrl.host + ':' + webserviceUrl.port + '/';
	}
	return createClient(webserviceUrl);
}
