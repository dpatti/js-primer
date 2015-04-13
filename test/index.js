var fs = require('fs');

var problems = {
  1: 'count.js',
  2: 'countEq.js',
  3: 'countPred.js',
  4: 'countBy.js',
  5: 'groupBy.js',
  6: 'uniq.js',
  7: 'union.js',
  8: 'intersection.js',
};

var notifiedSkip = false;

Object.keys(problems).forEach(function(n) {
  var problem = problems[n];
  var file = n + '-' + problem;
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
