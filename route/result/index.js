'use strict';

var presentTask = require('../../view/presenter/task');
var presentResult = require('../../view/presenter/result');

module.exports = route;

// Route definition
function route (app) {

    app.express.get('/:id/:rid', function (req, res, next) {
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
                    res.render('result', {
                        task: presentTask(task),
                        mainResult: presentResult(result)
                    });
                });
        });
    });

}
