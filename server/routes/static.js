/* globals require, module */
'use strict';
exports.__esModule = true;
function staticRoutes(app) {
    // for js files, route goes to that file
    app.get('/nb-admin/*.js', function (req, res) {
        res.sendFile('/admin/' + req.url);
    });
    // for css files, route goes to that file
    app.get('/nb-admin/*.css', function (req, res) {
        res.sendFile('/admin/' + req.url);
    });
    // for js files, route goes to that file
    app.get('*.js', function (req, res) {
        res.sendFile('/dist/' + req.url);
    });
    // for css files, route goes to that file
    app.get('*.css', function (req, res) {
        res.sendFile('/dist/' + req.url);
    });
    // route to handle all angular requests
    app.get('/', function (req, res) {
        res.sendFile('index.html');
    });
    // route to handle all angular requests
    app.get('/nb-admin/*', function (req, res) {
        res.sendFile('/admin/' + req.url);
    });
}
exports.staticRoutes = staticRoutes;
;
