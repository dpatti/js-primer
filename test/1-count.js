var expect = require('chai').expect;
var count = require('../lib/1-count');

it('returns 0 for empty arrays', function(){
  expect(count([])).to.equal(0);
});

it('returns the number of elements', function(){
  expect(count([1, 2, 3])).to.equal(3);
});

it('handles any type of value', function(){
  expect(count([0, 'hello', true, {}])).to.equal(4);
});
