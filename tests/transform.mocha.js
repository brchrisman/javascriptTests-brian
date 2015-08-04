'use strict';

// test setup
var chai = require('chai');
var expect = chai.expect;

// module under test
var arrayTransform = require('../transform.js');

suite('arrayTransform', function () {
  test('should be a function', function () {
    expect(arrayTransform).to.be.a('function');
  });

  test('should transform with sqrt', function () {
    expect(arrayTransform([1, 4, 9, 16, 25], Math.sqrt))
      .to.deep.equal([1, 2, 3, 4, 5]);
  });

  test('should transform with add 5', function () {
    expect(arrayTransform([1, 4, 9, 16, 25], function add5(n) {
        return n + 5;
      }
    )).to.deep.equal([6, 9, 14, 21, 30]);
  });

  test('should transform with string length', function () {
    var data = ['foo', 'bar', 'foobar', 'barfoo1'];
    expect(arrayTransform(data, function strLength(s) {
        return s.length
      }
    )).to.deep.equal([3, 3, 6, 7]);
  });
});
