/* globals require, module */
'use strict';
import { User } from '../api/controllers/user.controller';

let user = new User();

export function userRoutes(app) {
  // GET requests
  app.get('/api/v1/users/', (req, res) => {
    user.getUsers(req, res);
  });

  app.get('/api/v1/users/:id', (req, res) => {
    user.getUser(req, res);
  });

  // POST request
  app.post('/api/v1/users/', (req, res) => {
    user.addUser(req, res);
  });

  app.post('/api/v1/users/authenticate/', (req, res) => {
    user.loginUser(req, res);
  });


  // PUT request
  app.put('/api/v1/users/:id', (req, res) => {
    user.updateUser(req, res);
  });
}
