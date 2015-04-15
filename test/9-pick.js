var expect = require('chai').expect;
var pick = require('../lib/9-pick');

it('returns an empty object for empty arguments', function(){
  expect(pick({}, [])).to.eql({});
});

it('returns an empty object for empty object', function(){
  expect(pick({}, ['a', 'b'])).to.eql({});
});

it('returns an empty object for empty array', function(){
  expect(pick({ a: 1, b: 2 }, [])).to.eql({});
});

it('leaves unpicked keys out', function(){
  expect(pick({ a: 1, b: 2 }, ['a'])).to.eql({ a: 1 });
});

it('ignores picked keys that do not exist', function(){
  expect(pick({ a: 1 }, ['a', 'c'])).to.eql({ a: 1 });
});

it('still picks keys whose values are undefined', function(){
  expect(pick({ a: undefined }, ['a']))
  .to.have.property('a', undefined);
});

it('returns a new object', function(){
  var obj = { a: 1 };
  expect(pick(obj, ['a'])).to.not.equal(obj);
});

