'use strict';

var _ = require('underscore');
var moment = require('moment');

module.exports = presentResultList;

function presentResultList (results) {
    var resultsByDay = _.groupBy(results, function (result) {
        return moment(result.date).format('YYYY-MM-DD');
    });
    var uniqueDayResults = [];
    _.keys(resultsByDay).forEach(function (day) {
        uniqueDayResults.push(resultsByDay[day][0]);
    });
    return uniqueDayResults;
}
