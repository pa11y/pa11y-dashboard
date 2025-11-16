'use strict';

const {defineConfig} = require('eslint/config');

const configPa11y = require('eslint-config-pa11y');

module.exports = defineConfig([
	configPa11y,
	{
		ignores: [
			'public/js/*'
		]
	},
	{
		files: ['test/**/*.js', 'test/**/*.cjs'],
		rules: {
			'prefer-arrow-callback': 'off',
			'no-invalid-this': 'off',
			'n/no-unsupported-features/node-builtins': ['error', {
				ignores: ['fetch']
			}]
		}
	},
	{
		files: ['data/*'],
		rules: {
			'max-len': 'off'
		}
	}
]);
