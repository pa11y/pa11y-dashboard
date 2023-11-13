'use strict';

const config = require('../.eslintrc');

// We use `this` all over the integration tests
config.rules['no-invalid-this'] = 'off';
config.rules['prefer-arrow-callback'] = 'off';

module.exports = config;
