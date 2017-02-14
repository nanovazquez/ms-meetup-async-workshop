var express = require('express');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 8104;

var Promise = require('bluebird');
var readFile = Promise.promisify(fs.readFile);

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  next();
});

app.get('/applications', async function (req, res) {
  try {
    var data = await readFile('data.json', 'utf8');
    var apps = JSON.parse(data);
    console.log('..applications requested, sending %s apps', apps.length);
    res.send(apps);
  }
  catch (err){
    throw err;
  }
});

app.listen(port, function () {
  console.info('Worker Clouds API started on port', port);
});