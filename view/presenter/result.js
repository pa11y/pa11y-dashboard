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
const techs = require('../../data/techniques')();

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
				const groupMessage = groupedByCode[group][0];
				groupMessage.count = groupedByCode[group].length;
				groupMessage.items = groupedByCode[group].map(plural => ({
					selector: plural.selector,
					context: plural.context
				}));
				// Map standard to techniques
				const data = groupMessage.code.split('.');
				data.splice(0, 4);
				const techniques = data.join('.').split(',').map(code => code.split('.')[0]);
				groupMessage.solutions = techniques.reduce((prev, technique) => {
					if (techs[technique] && techs[technique].title) {
						prev.push({
							title: techs[technique].title || null,
							url: techs[technique].url || null
						});
					}
					return prev;
				}, []);
				return groupMessage;
			})
				.sort((currentItem, nextItem) => {
					return nextItem.count - currentItem.count;
				});
		});
	}

	return result;
}
