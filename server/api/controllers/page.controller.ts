declare var require;
'use strict';
let request = require('request');
import { PageService } from '../services/page.service';

let pageService = new PageService();

class Page {

  getPages(req, res) {
    return pageService.getPages((error, pages) => {
      if (error) {
        throw error;
      }
      return res.send(JSON.stringify(pages));
    });
  }

  getPage(req, res) {
    // get page from database using route ':slug'
  }

  addPage (req, res) {

  }

  updatePage(req, res) {

  }
}

export { Page };
