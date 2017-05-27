// get the client
import * as config from './config';
import * as mysql from 'mysql2';

// create the connection to database
let serverConfig = config.dbConfig[(process.env.NODE_ENV || 'dev')];
let connection = mysql.createConnection(serverConfig);

export { connection };

// with placeholder
// connection.query('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Page', 45], function (err, results) {
//   console.log(results);
// });
