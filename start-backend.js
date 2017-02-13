var exec = require('child_process').exec;

var scripts = [
  'cd apis/azure-manager && node .',
  'cd apis/runtime-manager && node .',
  'cd apis/worker-clouds && node .',
  'cd ui-facade && node .',
];

process.stdout.write('\033c');
console.log('Starting backend services');
console.log('-------------------------');
scripts.forEach(function (script) {
  var ps = exec(script);
  ps.stdout.on('data', function (data) { console.log(data.trim()); });
  ps.stderr.on('data', function (data) { console.error(data.trim()); });
});
