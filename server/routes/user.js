/* globals require, module */
'use strict';
exports.__esModule = true;
var user_controller_1 = require("../api/controllers/user.controller");
var user = new user_controller_1.User();
function userRoutes(app) {
    // GET requests
    app.get('/api/v1/users/', function (req, res) {
        user.getUsers(req, res);
    });
    app.get('/api/v1/users/:id', function (req, res) {
        user.getUser(req, res);
    });
    // POST request
    app.post('/api/v1/users/', function (req, res) {
        user.addUser(req, res);
    });
    app.post('/api/v1/users/authenticate/', function (req, res) {
        user.loginUser(req, res);
    });
    // PUT request
    app.put('/api/v1/users/:id', function (req, res) {
        user.updateUser(req, res);
    });
}
exports.userRoutes = userRoutes;
