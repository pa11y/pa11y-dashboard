'use strict';

// Clone the main config
const config = module.exports = JSON.parse(JSON.stringify(require('../.eslintrc')));

// We use `this` all over the integration tests
config.rules['no-invalid-this'] = 'off';

// Because of our use of `this`, arrow functions
// aren't really gonna work in the integration tests
config.rules['prefer-arrow-callback'] = 'off';

// Disable max line length/statements
config.rules['max-len'] = 'off';
config.rules['max-statements'] = 'off';
