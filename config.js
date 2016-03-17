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

var fs = require('fs');
var jsonPath = './config/' + (process.env.NODE_ENV || 'development') + '.json';

if (fs.existsSync(jsonPath)) {
  module.exports = require(jsonPath);
} else {
  module.exports = {
    port: Number(env('PORT', '4000')),
    noindex: env('NOINDEX', 'true') == 'true',
    readonly: env('READONLY', 'false') == 'true',

    webservice: env('WEBSERVICE_URL', {
      database: env('WEBSERVICE_DATABASE', 'mongodb://localhost/pa11y-webservice'),
      host: env('WEBSERVICE_HOST', '0.0.0.0'),
      port: Number(env('WEBSERVICE_PORT', '3000')),
      cron: env('WEBSERVICE_CRON', false)
    })
  }
}

function env(name, defaultValue) {
  var value = process.env[name];
  return typeof value == 'string' ? value : defaultValue;
}
