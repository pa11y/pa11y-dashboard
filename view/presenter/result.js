'use strict';

module.exports = presentResult;

function presentResult (result) {

    // Add additional info
    result.href = '/' + result.task + '/' + result.id;
    result.hrefCsv = '/' + result.task + '/' + result.id + '.csv';
    result.hrefJson = '/' + result.task + '/' + result.id + '.json';

    // Parse date
    result.date = new Date(result.date);

    return result;
}
