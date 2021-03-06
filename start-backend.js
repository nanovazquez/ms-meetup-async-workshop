var exec = require('child_process').exec;

var scripts = [
  'cd ui-facade && npm start --silent',
  'cd apis//azure-manager && npm start --silent',
  'cd apis//runtime-manager && npm start --silent',
  'cd apis//worker-clouds && npm start --silent',
];

process.stdout.write('\033c');
console.log('Starting backend services');
console.log('-------------------------');
scripts.forEach(function (script) {
  var ps = exec(script);
  ps.stdout.on('data', function (data) { console.log(data.trim()); });
  ps.stderr.on('data', function (data) { console.error(data.trim()); });
});
