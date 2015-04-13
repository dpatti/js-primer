var expect = require('chai').expect;
var intersection = require('../lib/8-intersection');

it('returns an empty array for no first argument', function(){
  expect(intersection([], [1, 2, 3])).to.eql([]);
});

it('returns an empty array for no second argument', function(){
  expect(intersection([1, 2, 3], [])).to.eql([]);
});

it('handles equal sets', function(){
  expect(intersection([1, 2, 3], [3, 2, 1])).to.eql([1, 2, 3]);
});

it('works with a heavy first set', function(){
  expect(intersection([1, 2, 3], [1])).to.eql([1]);
});

it('works with a heavy second set', function(){
  expect(intersection([1], [1, 2, 3])).to.eql([1]);
});

it('does not coerce values', function(){
  expect(intersection([1, 2], ['1', 2])).to.eql([2]);
});

it('does not include duplicate values', function(){
  expect(intersection([1, 1, 1], [1])).to.eql([1]);
});

it('returns a new array', function(){
  var input = [1, 2, 3];
  expect(intersection(input, input)).to.not.equal(input);
});
