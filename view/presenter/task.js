'use strict';

var _ = require('underscore');
var presentIgnoreRules = require('./ignore');
var presentResult = require('./result');

module.exports = presentTask;

function presentTask (task) {

    // Add additional info
    task.href = '/' + task.id;
    task.hrefDelete = '/' + task.id + '/delete';
    task.hrefRun = '/' + task.id + '/run';
    task.hrefJson = '/' + task.id + '.json';
    task.hrefEdit = '/' + task.id + '/edit';
    task.hrefIgnore = '/' + task.id + '/ignore';
    task.hrefUnignore = '/' + task.id + '/unignore';

    // Enhance the ignored rules
    task.ignore = presentIgnoreRules(task.ignore);

    // Present the last result if present
    if (task.last_result) {
        task.lastResult = presentResult(task.last_result);
        delete task.last_result;
    }

    return task;
}
