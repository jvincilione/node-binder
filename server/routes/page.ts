/* globals require, module */
'use strict';
import { Page } from '../api/controllers/page.controller';

let page = new Page();

export function pageRoutes(app) {
  // GET requests
  app.get('/api/v1/pages/', (req, res) => {
    page.getPages(req, res);
  });

  app.get('/api/v1/pages/:slug', (req, res) => {
    page.getPage(req, res);
  });

  // POST request
  app.post('/api/v1/pages/', (req, res) => {
    page.addPage(req, res);
  });

  // PUT request
  app.put('/api/v1/pages/:id', (req, res) => {
    page.updatePage(req, res);
  });
}
