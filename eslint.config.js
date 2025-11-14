'use strict';

const pa11yConfig = require('pa11y-lint-config/eslint/es2017');

const config = {
	...pa11yConfig,
	parserOptions: {
		ecmaVersion: 2019
	}
};

module.exports = config;
