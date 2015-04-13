var expect = require('chai').expect;
var groupBy = require('../lib/5-groupBy');

it('returns an object for empty arrays', function(){
  var fn = function(){
    return 0;
  };
  expect(groupBy([], fn)).to.eql({});
});

it('initializes new groups with []', function(){
  var fn = function(x) {
    return x;
  };
  expect(groupBy(['a', 'b'], fn))
  .to.eql({
    a: ['a'],
    b: ['b']
  });
});

it('groups original values', function(){
  var fn = function(x) {
    return Number(x) * 10;
  };
  expect(groupBy(['1', '2', '3', '1'], fn))
  .to.eql({
    10: ['1', '1'],
    20: ['2'],
    30: ['3']
  });
});

it('adds each item', function(){
  var fn = function(x) {
    return x % 2 === 0 ? 'even' : 'odd';
  };
  expect(groupBy([0, 1, 2, 3, 4], fn))
  .to.eql({
    even: [0, 2, 4],
    odd: [1, 3]
  });
});

it('ignores undefined keys', function(){
  var fn = function(x) {
    return x > 0 ? x : undefined;
  };
  expect(groupBy([-1, 0, 1], fn))
  .to.eql({
    1: [1]
  });
});
