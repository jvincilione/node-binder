"use strict";
exports.__esModule = true;
// get the client
var config = require("./config");
var mysql = require("mysql2");
// create the connection to database
var serverConfig = config.dbConfig[(process.env.NODE_ENV || 'dev')];
var connection = mysql.createConnection(serverConfig);
exports.connection = connection;
// with placeholder
// connection.query('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Page', 45], function (err, results) {
//   console.log(results);
// });
