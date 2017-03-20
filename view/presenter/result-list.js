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
const moment = require('moment');

module.exports = presentResultList;

function presentResultList(results) {
	const resultsByDay = _.groupBy(results, result => {
		return moment(result.date).format('YYYY-MM-DD');
	});
	const uniqueDayResults = [];
	_.keys(resultsByDay).forEach(day => {
		uniqueDayResults.push(resultsByDay[day][0]);
	});
	return uniqueDayResults;
}
