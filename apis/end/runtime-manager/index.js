var express = require('express');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 8103;

var Promise = require('bluebird');
var readFile = Promise.promisify(fs.readFile);

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  next();
});

app.get('/applications', function (req, res) {
  return readFile('data.json', 'utf8')
    .then(function (data) {
      var apps = JSON.parse(data);
      console.log('..applications requested, sending %s apps', apps.length);
      res.send(apps);
    })
    .catch(function (err) {
      if (err) {
        throw err;
      }
    });
});

app.listen(port, function () {
  console.info('Runtime Manager API started on port', port);
});