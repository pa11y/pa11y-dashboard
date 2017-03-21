'use strict';

// Clone the main config
var config = module.exports = JSON.parse(JSON.stringify(require('../.eslintrc')));

// Disable max line length/statements
config.rules['max-len'] = 'off';
config.rules['max-statements'] = 'off';
