var expect = require('chai').expect;
var counterFor = require('../lib/d-counterFor');

it('returns 0 the first time', function(){
  expect(counterFor('a')).to.equal(0);
});

it('returns 0 for a different tag', function(){
  expect(counterFor('b')).to.equal(0);
});

it('increments each tag separately', function(){
  expect(counterFor('a')).to.equal(1);
  expect(counterFor('a')).to.equal(2);
  expect(counterFor('b')).to.equal(1);
  expect(counterFor('b')).to.equal(2);
});
