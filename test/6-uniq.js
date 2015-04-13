var expect = require('chai').expect;
var uniq = require('../lib/6-uniq');

it('returns an empty array without input', function(){
  expect(uniq([])).to.eql([]);
});

it('de-duplicates a single value', function(){
  expect(uniq([1, 1, 1, 1])).to.eql([1]);
});

it('maintains order of first values', function(){
  expect(uniq([1, 2, 3, 1, 2, 3])).to.eql([1, 2, 3]);
});

it('works with mixed values', function(){
  expect(uniq([1, 'a', true, 1, 'a', true])).to.eql([1, 'a', true]);
});

it('considers object equality', function(){
  var obj = {};
  expect(uniq([obj, {}, obj])).to.eql([{}, {}]);
});

it('returns a new array', function(){
  var input = [1, 2, 3];
  expect(uniq(input)).to.not.equal(input);
});
