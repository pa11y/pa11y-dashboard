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

const presentIgnoreRules = require('./ignore');
const presentResult = require('./result');

module.exports = presentTask;

function presentTask(task) {

	// Add additional info
	task.href = `/${task.id}`;
	task.hrefDelete = `/${task.id}/delete`;
	task.hrefRun = `/${task.id}/run`;
	task.hrefJson = `/${task.id}.json`;
	task.hrefEdit = `/${task.id}/edit`;
	task.hrefIgnore = `/${task.id}/ignore`;
	task.hrefUnignore = `/${task.id}/unignore`;

	// Enhance the ignored rules
	task.ignore = presentIgnoreRules(task.ignore);

	// Change headers to a string format
	if (task.headers && typeof task.headers === 'object') {
		task.headers = Object.keys(task.headers).map(header => {
			return `${header}: ${task.headers[header]}`;
		}).join('\n');
	}

	// Present the last result if present
	if (task.last_result) {
		task.lastResult = presentResult(task.last_result);
		delete task.last_result;
	}

	return task;
}
