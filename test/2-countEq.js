var expect = require('chai').expect;
var countEq = require('../lib/2-countEq');

it('returns 0 for empty arrays', function(){
  expect(countEq([], 0)).to.equal(0);
});

it('matches numbers', function(){
  expect(countEq([1, 2, 3, 2], 2)).to.equal(2);
});

it('matches letters', function(){
  expect(countEq(['a', 'b', 'c'], 'a')).to.equal(1);
});

it('does not coerce', function(){
  expect(countEq(['0', false, '', []], 0)).to.equal(0);
});
