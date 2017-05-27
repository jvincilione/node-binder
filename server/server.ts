declare var require, process, __dirname;
// server.js

// modules =================================================
let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let cookieParser = require('cookie-parser');

let app = express();

// configuration ===========================================

// set our port
const PORT = process.env.PORT || 5270;
const SSLPORT = process.env.SSLPORT || 443;

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// add ability to use cookies
app.use(cookieParser());

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  next();
});

// set the static files location /dist/filename will be /filename for users
app.use(express.static(__dirname + '/../dist'));

// routes ==================================================
import { pageRoutes } from './routes/page';
import { staticRoutes } from './routes/static';

pageRoutes(app);
staticRoutes(app);

// start app ===============================================
if (process.env.NODE_ENV === 'dev') {
  let http = require('http');
  // let https = require('https');
  // let fs = require('fs');

  // let options = {
  //   key: fs.readFileSync('server/ssl/ezprints.key'),
  //   cert: fs.readFileSync('server/ssl/ezprints.crt')
  // };

  http.createServer(app).listen(PORT, 'dev.nodebinder.io');
  // http.createServer(app).listen(PORT, '0.0.0.0');
  // https.createServer(options, app).listen(SSLPORT, 'builder.ezprints.com');
} else {
  app.listen(PORT);
}

console.log('Magic happens on port ' + PORT + '\n NODE_ENV: ' + process.env.NODE_ENV);

// expose app
export { app };
