var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');
var DatabaseSetup = require('./db-setup');
var Promise = require('bluebird');
var UpdateDetails = require('./update-details');
var GithubProcessor = require('./github-processor');
var githubProcessor = null;
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
var logger=require('./log.js'); 

doServerSetup(app);

app.get('/', coders.getCoders);
app.post('/api/coders', coder.add);
app.get('/api/coders/refresh', coders.refresh);


var port = process.env.GH_TRACKER_PORT || 3000;
var server = http.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  logger.log('info', 'starting up...');
  console.log('Example app listening at http://%s:%s', host, port)

})
