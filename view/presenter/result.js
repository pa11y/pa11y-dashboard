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

const _ = require('underscore');
const presentIgnoreRules = require('./ignore');

module.exports = presentResult;

function presentResult(result) {

	// Add additional info
	result.href = `/${result.task}/${result.id}`;
	result.hrefCsv = `/${result.task}/${result.id}.csv`;
	result.hrefJson = `/${result.task}/${result.id}.json`;

	// Parse date
	result.date = new Date(result.date);

	// Enhance the ignored rules
	result.ignore = presentIgnoreRules(result.ignore);

	// Split out message types
	if (result.results) {
		const groupedByType = _.groupBy(result.results, 'type');
		['error', 'warning', 'notice'].forEach(type => {
			const pluralType = `${type}s`;
			const results = groupedByType[type] || [];
			const groupedByCode = _.groupBy(results, 'code');
			result[pluralType] = _.keys(groupedByCode).map(group => {
				const firstMessage = groupedByCode[group][0];
				firstMessage.count = groupedByCode[group].length;
				return firstMessage;
			});
		});
	}

	return result;
}
