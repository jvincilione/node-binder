"use strict";
exports.__esModule = true;
var connection_1 = require("../../database/connection");
var PageService = (function () {
    function PageService() {
    }
    PageService.prototype.getPages = function (callback) {
        connection_1.connection.query('SELECT * FROM `nb_pages`', callback);
    };
    PageService.prototype.getPage = function (slug, callback) {
        connection_1.connection.execute('SELECT * FROM `nb_pages` WHERE `page_slug` = ?;', [slug], callback);
    };
    PageService.prototype.createPage = function (page, callback) {
        connection_1.connection.execute('INSERT INTO `nb_pages` ' +
            '(`page_title`, ' +
            '`page_slug`, ' +
            '`page_content`, ' +
            '`page_created_date`, ' +
            '`page_author`, ' +
            '`page_parent`) ' +
            'VALUES (?, ?, ?, ?, ?, ?);', [
            page.title,
            page.slug,
            page.content,
            page.createdDate,
            page.author,
            page.parent
        ], callback);
    };
    PageService.prototype.updatePage = function (page, callback) {
        connection_1.connection.execute('UPDATE `nb_pages` ' +
            'SET `page_title` = ?, ' +
            'SET `page_slug` = ?, ' +
            'SET `page_content` = ?, ' +
            'SET `page_created_date` = ?, ' +
            'SET `page_author` = ?, ' +
            'SET `page_parent` = ?, ' +
            'WHERE id = ?;', [
            page.title,
            page.slug,
            page.content,
            page.createdDate,
            page.author,
            page.parent,
            page.id
        ], callback);
    };
    return PageService;
}());
exports.PageService = PageService;
