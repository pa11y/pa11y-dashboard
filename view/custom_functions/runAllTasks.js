/* eslint-disable id-blacklist */
'use strict';

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
		console.log(result);
		// eslint-disable-next-line no-shadow
		const idArray = result.map(result => {
			// eslint-disable-next-line no-underscore-dangle
			return result._id;
		});
		console.log(idArray);
		db.close();
	});
});
