var express = require('express');
var nconf = require('nconf');
var app = express();

nconf.argv().env().file({ file: 'local.json' });

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(nconf.get('port'));
