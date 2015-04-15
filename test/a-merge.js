var expect = require('chai').expect;
var merge = require('../lib/a-merge');

it('returns the first object', function(){
  var obj = { a: 1 };
  expect(merge(obj, { b: 2 })).to.equal(obj);
});

it('adds nothing if obj2 is empty', function(){
  expect(merge({ a: 1 }, {})).to.eql({ a: 1 });
});

it('adds everything if obj1 is empty', function(){
  expect(merge({}, { a: 1 })).to.eql({ a: 1 });
});

it('merges the two objects together', function(){
  expect(merge({ a: 1 }, { b: 2 })).to.eql({ a: 1, b: 2 });
});

it('replaces values for duplicate keys', function(){
  expect(merge({ a: 1 }, { a: 2 })).to.eql({ a: 2 });
});

it('does not drop undefined values', function(){
  expect(merge({}, { a: undefined })).to.eql({ a: undefined });
});
