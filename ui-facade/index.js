var express = require('express');
var request = require('request');
var app = express();
var port = process.env.PORT || 8101;

var apis = [
  'http://localhost:8102/applications',
  'http://localhost:8103/applications',
  'http://localhost:8104/applications',
];

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  next();
});

app.get('/applications', function (req, res) {
  var applications = [];
  console.log();
  console.log('Requesting applications..');

  console.log('Calling %s', apis[0]);
  request(apis[0], function (error, response, body) {
    if (!error && response.statusCode == 200) {

      applications = [].concat(applications, JSON.parse(body));

      console.log('Calling %s', apis[1]);
      request(apis[1], function (error, response, body) {

        if (!error && response.statusCode == 200) {
          applications = [].concat(applications, JSON.parse(body));

          console.log('Calling %s', apis[2]);
          request(apis[2], function (error, response, body) {

            if (!error && response.statusCode == 200) {
              applications = [].concat(applications, JSON.parse(body));
              console.log('Done. Sending %s apps to the UI', applications.length);
              res.send(applications);
            }
          });
        }
      });
    }
  });
})

app.listen(port, function () {
  console.info('UI Facade started on port', port);
});