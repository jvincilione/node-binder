import { connection } from '../../database/connection';
import { User } from '../interfaces/user.interface';

class UserService {
  getUsers(callback:any) :void {
    connection.query('SELECT * FROM `nb_users`', callback);
  }

  getUser(userId, callback:any) :void {
    connection.execute('SELECT * FROM `nb_users` WHERE `id` = ?;', [userId], callback);
  }

  createUser(user:User, callback:any) :void {
    connection.execute('INSERT INTO `nb_users` ' +
                          '(`user_email`, ' +
                            '`user_login`, ' +
                            '`user_pass`, ' +
                            '`user_nicename`, ' +
                            '`user_registered`, ' +
                            '`user_display_name`, ' +
                            '`user_role`) ' +
                        'VALUES (?, ?, ?, ?, ?, ?, ?);',
                        [
                          user.email,
                          user.login,
                          user.pass,
                          user.nicename,
                          user.registered,
                          user.displayName,
                          user.role,
                        ],
                        callback);
  }

  updateUser(user:User, callback:any) :void {
    connection.execute('UPDATE `nb_users` ' +
                          'SET `user_email` = ?, ' +
                          'SET `user_login` = ?, ' +
                          'SET `user_pass` = ?, ' +
                          'SET `user_nicename` = ?, ' +
                          'SET `user_registered` = ?, ' +
                          'SET `user_display_name` = ?, ' +
                          'SET `user_role` = ? ' +
                        'WHERE id = ?;',
                        [
                          user.email,
                          user.login,
                          user.pass,
                          user.nicename,
                          user.registered,
                          user.displayName,
                          user.role
                        ],
                        callback);
  }

  resetToken(userId, token:string, callback:any) :void {
    connection.execute('UPDATE `nb_users` ' +
                          'SET `user_token` = ? ' +
                        'WHERE `id` = ?;',
                        [token, userId], callback);
  }

  loginUser(login:string, password:string, callback) :void {

  }
}

export { UserService };
