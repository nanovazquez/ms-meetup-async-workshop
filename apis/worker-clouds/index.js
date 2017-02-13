var express = require('express');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 8104;

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  next();
});

app.get('/applications', function (req, res) {
  fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) {
      return console.error(err);
    }
    var apps = JSON.parse(data);
    console.log('Requesting applications, sending %s apps', apps.length);
    res.send(apps);
  });
});

app.listen(port, function () {
  console.info('Worker Clouds API started on port', port);
});