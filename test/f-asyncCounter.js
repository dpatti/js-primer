var expect = require('chai').expect;
var asyncCounter = require('../lib/f-asyncCounter');

it('returns a function', function(){
  expect(asyncCounter(function(){})).to.be.a.function;
});

it('calls the callback to count', function(done){
  var counter = asyncCounter(function(i){
    expect(i).to.equal(0);
    done();
  });
  counter();
});

it('calls for each increment', function(){
  var expectations = [0, 1, 2, 3];
  var counter = asyncCounter(function(i){
    var expected = expectations.shift();
    expect(expected).to.exist;
    expect(i).to.equal(expected);
  });

  counter();
  counter();
  counter();
  counter();

  expect(expectations).to.be.empty;
});

it('can create different counters', function(){
  var expectations = [0, 1, 0, 1, 2, 2];
  var callback = function(i){
    var expected = expectations.shift();
    expect(expected).to.exist;
    expect(i).to.equal(expected);
  };

  var c1 = asyncCounter(callback);
  var c2 = asyncCounter(callback);

  c1();
  c1();
  c2();
  c2();
  c2();
  c1();

  expect(expectations).to.be.empty;
});
