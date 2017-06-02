"use strict";
exports.__esModule = true;
var connection_1 = require("../../database/connection");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function (callback) {
        connection_1.connection.query('SELECT * FROM `nb_users`', callback);
    };
    UserService.prototype.getUser = function (userId, callback) {
        connection_1.connection.execute('SELECT * FROM `nb_users` WHERE `id` = ?;', [userId], callback);
    };
    UserService.prototype.createUser = function (user, callback) {
        connection_1.connection.execute('INSERT INTO `nb_users` ' +
            '(`user_email`, ' +
            '`user_login`, ' +
            '`user_pass`, ' +
            '`user_nicename`, ' +
            '`user_registered`, ' +
            '`user_display_name`, ' +
            '`user_role`) ' +
            'VALUES (?, ?, ?, ?, ?, ?, ?);', [
            user.email,
            user.login,
            user.pass,
            user.nicename,
            user.registered,
            user.displayName,
            user.role,
        ], callback);
    };
    UserService.prototype.updateUser = function (user, callback) {
        connection_1.connection.execute('UPDATE `nb_users` ' +
            'SET `user_email` = ?, ' +
            'SET `user_login` = ?, ' +
            'SET `user_pass` = ?, ' +
            'SET `user_nicename` = ?, ' +
            'SET `user_registered` = ?, ' +
            'SET `user_display_name` = ?, ' +
            'SET `user_role` = ? ' +
            'WHERE id = ?;', [
            user.email,
            user.login,
            user.pass,
            user.nicename,
            user.registered,
            user.displayName,
            user.role
        ], callback);
    };
    UserService.prototype.resetToken = function (userId, token, callback) {
        connection_1.connection.execute('UPDATE `nb_users` ' +
            'SET `user_token` = ? ' +
            'WHERE `id` = ?;', [token, userId], callback);
    };
    UserService.prototype.loginUser = function (login, password, callback) {
    };
    return UserService;
}());
exports.UserService = UserService;
