var fs = require('fs');
var problems = require('../problems');
var notifiedSkip = false;

Object.keys(problems).forEach(function(n) {
  var problem = problems[n];
  var file = n + '-' + problem + '.js';
  var slug = n + ': ' + problem + '()';

  var lib = './lib/' + file;
  if (!fs.existsSync(lib)) {
    describe.skip(slug, function(){
      if (!notifiedSkip) {
        it('can be tested once a lib file is created at ' + lib);
        notifiedSkip = true;
      }
    });
  } else {
    describe(slug, function(){
      require('./' + file);
    });
  }
});
