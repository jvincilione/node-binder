"use strict";
exports.__esModule = true;
'use strict';
var request = require('request');
var page_service_1 = require("../services/page.service");
var pageService = new page_service_1.PageService();
var Page = (function () {
    function Page() {
    }
    Page.prototype.getPages = function (req, res) {
        return pageService.getPages(function (error, pages) {
            if (error) {
                throw error;
            }
            return res.send(JSON.stringify(pages));
        });
    };
    Page.prototype.getPage = function (req, res) {
        // get page from database using route ':slug'
    };
    Page.prototype.addPage = function (req, res) {
    };
    Page.prototype.updatePage = function (req, res) {
    };
    return Page;
}());
exports.Page = Page;
