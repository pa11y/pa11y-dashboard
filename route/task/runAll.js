/* eslint-disable id-blacklist */
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

module.exports = route;

// Route definition
function route(app) {
	app.express.get('/run-all/', () => {
		runAll();
	});
}

function runAll() {
	const fetch = require('node-fetch');
	const MongoClient = require('mongodb').MongoClient;
	const url = 'mongodb://localhost/pa11y-webservice-dev';

	MongoClient.connect(url, (err, db) => {
		if (err) {
			throw err;
		}
		const dbo = db.db('pa11y-webservice-dev');
		const query = {};

		dbo.collection('tasks').find(query).toArray((_err, result) => {
			if (err) {
				throw err;
			}
			db.close();
			// eslint-disable-next-line no-shadow
			const idArray = result.map(result => {
				// eslint-disable-next-line no-underscore-dangle
				return result._id;
			});
			console.log('Array of task Ids: \n');
			console.log(idArray);

			// eslint-disable-next-line no-plusplus
			for (let i = 0; i < idArray.length; i++) {
				console.log(`${i} : ${idArray[i]}`);

				const postUrl = `http://0.0.0.0:3999/tasks/${idArray[i]}/run`;
				fetch(postUrl, {
					method: 'POST'
				}).then(res => {
					// eslint-disable-next-line max-len
					console.log(`${idArray[i]} task successfully run! Request #${i} / ${idArray.length}`);
				});
			}
		});
	});
}
