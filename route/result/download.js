'use strict';

var moment = require('moment');

module.exports = route;

// Route definition
function route (app) {

    app.express.get('/:id/:rid.csv', function (req, res, next) {
        app.webservice.task(req.params.id).get({}, function (err, task) {
            if (err) {
                return next();
            }
            app.webservice
                .task(req.params.id)
                .result(req.params.rid)
                .get({full: true}, function (err, result) {
                    if (err) {
                        return next();
                    }
                    var rows = ['"code", "message", "type"'];
                    result.results.forEach(function (msg) {
                        rows.push([
                            JSON.stringify(msg.code),
                            JSON.stringify(msg.message),
                            JSON.stringify(msg.type)
                        ].join(', '));
                    });
                    res.attachment([
                        'pa11y--',
                        task.url.replace(/^https?:\/\//i, '').replace(/\/$/, '').replace(/[^a-z0-9\.\-\_]+/gi, '-') + '--',
                        task.standard.toLowerCase() + '--',
                        moment(result.date).format('YYYY-MM-DD'),
                        '.csv'
                    ].join(''));
                    res.send(rows.join('\n'));
                });
        });
    });

}
