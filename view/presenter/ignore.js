'use strict';

var standardsArray = require('../../data/standards')();
var rules = createStandardDescriptionMap(standardsArray);

module.exports = presentIgnoreRules;

function presentIgnoreRules (ignore) {
    return ignore.map(function (name) {
        return {
            name: name,
            description: rules[name]
        };
    });
}

function createStandardDescriptionMap (standards) {
    var map = {};
    standards.forEach(function (standard) {
        standard.rules.forEach(function (rule) {
            map[rule.name] = rule.description;
        });
    });
    return map;
}
