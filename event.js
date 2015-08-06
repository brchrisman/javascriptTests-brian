'use strict';

/////////////////////////////////////////////////////////////////////////////
//  EVENTS EMITTER TEST
//
//  Copyright Scale Computing 2015
//  DO NOT DISTRIBUTE OR REPRODUCE ONLINE IN ANY FORM
/////////////////////////////////////////////////////////////////////////////

/**
 * Fix the following code and make the accompanying unit tests in
 * event.mocha.js pass.
 */
module.exports = function changeEmitterFactory() {
  var events = require('events');
  var changeEmitter = new events.EventEmitter();

  var data;

  function emitOnDiff(newData) {
    if (newData !== data) {
      changeEmitter.emit('change', newData);
    }
  }

  changeEmitter.setData = function setData(newData) {
    emitOnDiff(newData);

    // set data in this function - do not change this!
    data = newData;
  };

  changeEmitter.getData = function getData() {
    return data;
  };

  return changeEmitter;
};
