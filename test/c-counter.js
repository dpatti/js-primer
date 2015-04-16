var expect = require('chai').expect;
var counter = require('../lib/c-counter');

it('returns 0 the first time', function(){
  expect(counter()).to.equal(0);
});

it('increments', function(){
  expect(counter()).to.equal(1);
  expect(counter()).to.equal(2);
  expect(counter()).to.equal(3);
});
