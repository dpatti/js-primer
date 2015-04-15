var fs = require('fs');
var problems = require('./problems');
var repl = require('repl');

Object.keys(problems).forEach(function(n) {
  var problem = problems[n];
  var lib = './lib/' + n + '-' + problem + '.js';

  if (!fs.existsSync(lib)) {
    console.error("Skipping " + problem + " because file is not present");
    return;
  }

  global[problem] = require(lib);

  console.log("Loaded " + lib + " as " + problem + "()");
});

repl.start('> ');
