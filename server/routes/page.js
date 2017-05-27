/* globals require, module */
'use strict';
exports.__esModule = true;
var page_controller_1 = require("../api/controllers/page.controller");
var page = new page_controller_1.Page();
function pageRoutes(app) {
    // GET requests
    app.get('/api/v1/pages/', function (req, res) {
        page.getPages(req, res);
    });
    app.get('/api/v1/pages/:slug', function (req, res) {
        page.getPage(req, res);
    });
    // POST request
    app.post('/api/v1/pages/', function (req, res) {
        page.addPage(req, res);
    });
    // PUT request
    app.put('/api/v1/pages/:id', function (req, res) {
        page.updatePage(req, res);
    });
}
exports.pageRoutes = pageRoutes;
