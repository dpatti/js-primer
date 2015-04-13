var expect = require('chai').expect;
var union = require('../lib/7-union');

it('returns the second array for no first argument', function(){
  expect(union([], [1, 2, 3])).to.eql([1, 2, 3]);
});

it('returns the first array for no second argument', function(){
  expect(union([4, 5, 6], [])).to.eql([4, 5, 6]);
});

it('returns the sets combined in order', function(){
  expect(union([1, 2], [3, 4])).to.eql([1, 2, 3, 4]);
});

it('throws away duplicates', function(){
  expect(union([1, 2, 3], [3, 4, 5])).to.eql([1, 2, 3, 4, 5]);
});

it('handles equal sets', function(){
  expect(union([1, 2, 3], [3, 2, 1])).to.eql([1, 2, 3]);
});

it('works with a heavy first set', function(){
  expect(union([1, 2, 3], [1])).to.eql([1, 2, 3]);
});

it('works with a heavy second set', function(){
  expect(union([1], [1, 2, 3])).to.eql([1, 2, 3]);
});

it('works with duplicates in sets', function(){
  expect(union([1, 1], [2, 2])).to.eql([1, 2]);
});

it('works with mixed values', function(){
  expect(union([1, 'a', true], [true, 'a', 1])).to.eql([1, 'a', true]);
});

it('considers object equality', function(){
  var obj = {};
  expect(union([obj, {}], [{}, obj])).to.eql([{}, {}, {}]);
});

it('returns a new array', function(){
  var input = [1, 2, 3];
  expect(union(input, input)).to.not.equal(input);
});
