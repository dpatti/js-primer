var expect = require('chai').expect;
var intersection = require('../lib/8-intersection');

it('returns an empty array for no first argument', function(){
  expect(intersection([], [1, 2, 3])).to.eql([]);
});

it('returns an empty array for no second argument', function(){
  expect(intersection([1, 2, 3], [])).to.eql([]);
});

it('does not coerce values', function(){
  expect(intersection([1, 2], ['1', 2])).to.eql([2]);
});

it('does not include duplicate values', function(){
  expect(intersection([1, 1, 1], [1])).to.eql([1]);
});
