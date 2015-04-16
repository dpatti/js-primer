var expect = require('chai').expect;
var spawnCounter = require('../lib/e-spawnCounter');

it('returns a function', function(){
  expect(spawnCounter()).to.be.a.function;
});

it('can be used to count', function(){
  var counter = spawnCounter();
  expect(counter()).to.equal(0);
  expect(counter()).to.equal(1);
  expect(counter()).to.equal(2);
});

it('returns separate counters', function(){
  var c1 = spawnCounter();
  var c2 = spawnCounter();

  expect(c1()).to.equal(0);
  expect(c1()).to.equal(1);
  expect(c2()).to.equal(0);
  expect(c2()).to.equal(1);
  expect(c2()).to.equal(2);
  expect(c1()).to.equal(2);
});
