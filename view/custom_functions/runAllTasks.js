/* eslint-disable id-blacklist */
'use strict';

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
		// console.log(result);
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
