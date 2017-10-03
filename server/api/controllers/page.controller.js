"use strict";
exports.__esModule = true;
'use strict';
var request = require('request');
var page_service_1 = require("../services/page.service");
var pageService = new page_service_1.PageService();
var returnMessage = function (res, status, message) {
    return res.status(status).send(message);
};
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
        var slug = req.params.slug;
        return pageService.getPage(slug, function (error, page) {
            if (page.length) {
                return res.send(JSON.stringify(page[0]));
            }
            else if (error) {
                return returnMessage(res, 500, error);
            }
            else {
                return returnMessage(res, 404, 'Page "' + slug + '" not found.');
            }
        });
    };
    Page.prototype.addPage = function (req, res) {
    };
    Page.prototype.updatePage = function (req, res) {
    };
    return Page;
}());
exports.Page = Page;
