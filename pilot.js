var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/pilot/index.html'));
});

app.listen(3002, function() {
  console.log('Pilot serves static files on port 3002');
});
