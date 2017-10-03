declare var require;
'use strict';
let request = require('request');
import { PageService } from '../services/page.service';

let pageService = new PageService();
let returnMessage = function(res, status, message) {
  return res.status(status).send(message);
};
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
    let slug = req.params.slug;
    return pageService.getPage(slug, function(error, page) {
      if (page.length) {
        return res.send(JSON.stringify(page[0]));
      } else if (error) {
        return returnMessage(res, 500, error);
      } else {
        return returnMessage(res, 404, 'Page "' + slug + '" not found.');
      }
    });
  }

  addPage (req, res) {

  }

  updatePage(req, res) {

  }
}

export { Page };
