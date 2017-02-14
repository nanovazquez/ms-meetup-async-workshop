var exec = require('child_process').exec;

var scripts = [
  'cd ui-facade && npm install',
  'cd mulesoft-apps-ui && npm install',

  'cd apis/begin/azure-manager && npm install',
  'cd apis/end/azure-manager && npm install',

  'cd apis/begin/runtime-manager && npm install',
  'cd apis/end/runtime-manager && npm install',

  'cd apis/begin/worker-clouds && npm install',
  'cd apis/end/worker-clouds && npm install',
];

process.stdout.write('\033c');
console.log('Installing packages');
console.log('--------------------');
scripts.forEach(function (script) {
  var ps = exec(script);
  ps.stdout.on('data', function (data) { console.log(data.trim()); });
  ps.stderr.on('data', function (data) { console.error(data.trim()); });
});
