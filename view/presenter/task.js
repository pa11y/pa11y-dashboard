'use strict';

var _ = require('underscore');
var presentResult = require('./result');
var standardsArray = require('../../data/standards')();
var rules = createStandardDescriptionMap(standardsArray);
console.log(rules);

module.exports = presentTask;

function presentTask (task) {

    // Add additional info
    task.href = '/' + task.id;
    task.hrefDelete = '/' + task.id + '/delete';
    task.hrefJson = '/' + task.id + '.json';

    // Enhance the ignored rules
    task.ignore = task.ignore.map(function (name) {
        return {
            name: name,
            description: rules[name]
        };
    });

    // Present the last result if present
    if (task.last_result) {
        task.lastResult = presentResult(task.last_result);
        delete task.last_result;
    }

    return task;
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
