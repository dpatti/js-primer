var expect = require('chai').expect;
var countPred = require('../lib/3-countPred');

it('returns 0 for empty arrays', function(){
  var pred = function(){
    return true;
  };
  expect(countPred([], pred)).to.equal(0);
});

it('obeys the predicate', function(){
  var pred = function(x) {
    return x % 2 === 0;
  };
  expect(countPred([1, 2, 3, 4], pred)).to.equal(2);
});

it('only counts for booleans', function(){
  var pred = function(x) {
    return x;
  };
  expect(countPred([1, 2, 3, 4], pred)).to.equal(0);
});
