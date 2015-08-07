'use strict';

// test setup
var chai = require('chai');
var expect = chai.expect;

// DO NOT CHANGE THE UNIT TESTS

suite('changeEmitter', function () {
  var changeEmitter;

  setup(function () {
    changeEmitter = require('../event.js')();
  });

  test('should be an object', function () {
    expect(changeEmitter).to.be.a('object');
  });

  suite('setData', function () {
    test('should emit change on first set', function (done) {
      changeEmitter.on('change', function (data) {
        expect(data).to.equal('foo');
        done();
      });

      changeEmitter.setData('foo');
    });

    test('should not emit change with same set', function (done) {
      var callCount = 0;

      changeEmitter.on('change', function (data) {
        callCount++;
        expect(data).to.equal('foo');
        expect(callCount).to.equal(1);
        done();
      });

      changeEmitter.setData('foo');
      changeEmitter.setData('foo');
    });

    test('should emit multiple changes', function (done) {
      var callCount = 0;

      changeEmitter.on('change', function (data) {
        callCount++;

        if (data === 'foo') {
          expect(callCount).to.equal(1);
        }

        if (data === 'bar') {
          expect(callCount).to.equal(2);
          done();
        }
      });

      changeEmitter.setData('foo');
      changeEmitter.setData('bar');
    });
  });

  suite('getData', function () {
    test('should return the current data', function () {
      changeEmitter.setData('foo');
      expect(changeEmitter.getData()).to.equal('foo');
    });

    // Failing unit test should go here

  });
});
