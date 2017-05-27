/* globals require, module */
'use strict';
export function staticRoutes(app) {
  // for js files, route goes to that file
  app.get('/nb-admin/*.js', (req, res) => {
    res.sendFile('/admin/' + req.url);
  });

  // for css files, route goes to that file
  app.get('/nb-admin/*.css', (req, res) => {
    res.sendFile('/admin/' + req.url);
  });

  // for js files, route goes to that file
  app.get('*.js', (req, res) => {
    res.sendFile('/dist/' + req.url);
  });

  // for css files, route goes to that file
  app.get('*.css', (req, res) => {
    res.sendFile('/dist/' + req.url);
  });

  // route to handle all angular requests
  app.get('/', (req, res) => {
    res.sendFile('index.html');
  });

  // route to handle all angular requests
  app.get('/nb-admin/*', (req, res) => {
    res.sendFile('/admin/' + req.url);
  });

};
