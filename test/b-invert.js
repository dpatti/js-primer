var expect = require('chai').expect;
var invert = require('../lib/b-invert');

it('returns an empty object when given one', function(){
  expect(invert({})).to.eql({});
});

it('inverts the keys and values', function(){
  expect(invert({ hello: "world" })).to.eql({ world: "hello" });
});

it('ignores null and undefined values', function(){
  expect(invert({ hello: null, world: undefined })).to.eql({});
});

it('does not ignore empty strings', function(){
  expect(invert({ hello: '' })).to.eql({ '': "hello" });
});

it('keeps the first key it inverts', function(){
  expect(invert({ a: "hello", b: "hello" })).to.eql({ hello: "a" });
});

it('returns a new object', function(){
  var obj = { a: 1 };
  expect(invert(obj)).to.not.equal(obj);
});
