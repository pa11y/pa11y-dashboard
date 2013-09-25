'use strict';

var presentResult = require('./result');

module.exports = presentTask;

function presentTask (task) {

    // Add additional info
    task.href = '/' + task.id;
    task.hrefDelete = '/' + task.id + '/delete';
    task.hrefJson = '/' + task.id + '.json';

    // Present the last result if present
    if (task.last_result) {
        task.lastResult = presentResult(task.last_result);
        delete task.last_result;
    }

    return task;
}
