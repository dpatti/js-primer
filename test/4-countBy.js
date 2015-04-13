var expect = require('chai').expect;
var countBy = require('../lib/4-countBy');

it('returns an object for empty arrays', function(){
  var fn = function(){
    return 0;
  };
  expect(countBy([], fn)).to.eql({});
});

it('initializes new groups with 0', function(){
  var fn = function(x) {
    return x;
  };
  expect(countBy(['a', 'b'], fn))
  .to.eql({
    a: 1,
    b: 1
  });
});

it('increments for each', function(){
  var fn = function(x) {
    return x;
  };
  expect(countBy(['a', 'b', 'a', 'b', 'a'], fn))
  .to.eql({
    a: 3,
    b: 2
  });
});

it('ignores undefined keys', function(){
  var fn = function(x) {
    return x >= 0 ? x : undefined;
  };
  expect(countBy([-1, 0, 1], fn))
  .to.eql({
    0: 1,
    1: 1
  });
});
