declare var require;
'use strict';
import * as bCrypt from 'bcrypt-nodejs';
import { UserService } from '../services/user.service';

let userService = new UserService();

class User {

  getUsers(req, res) {
    return userService.getUsers((error, users) => {
      if (error) {
        throw error;
      }
      for (let user of users) {
        delete user.user_pass;
      }
      return res.send(JSON.stringify(users));
    });
  }

  getUser(req, res) {
  }

  addUser (req, res) {

  }

  updateUser(req, res) {

  }

  loginUser(req, res) {

  }

  validateUserCookie(req, res) {

  }
}

export { User };
