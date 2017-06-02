"use strict";
exports.__esModule = true;
'use strict';
var user_service_1 = require("../services/user.service");
var userService = new user_service_1.UserService();
var User = (function () {
    function User() {
    }
    User.prototype.getUsers = function (req, res) {
        return userService.getUsers(function (error, users) {
            if (error) {
                throw error;
            }
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                delete user.user_pass;
            }
            return res.send(JSON.stringify(users));
        });
    };
    User.prototype.getUser = function (req, res) {
    };
    User.prototype.addUser = function (req, res) {
    };
    User.prototype.updateUser = function (req, res) {
    };
    User.prototype.loginUser = function (req, res) {
    };
    User.prototype.validateUserCookie = function (req, res) {
    };
    return User;
}());
exports.User = User;
