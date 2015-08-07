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

  /**
   * Emit a change event if the data is changed
   * param newData the data that we're updating to
   *
   * private
   */
  function emitOnDiff(oldData) {
    if (oldData !== data) {
      changeEmitter.emit('change', data);
    }
  }

  /**
   * Set the data
   * param newData the data that we're updating to
   *
   * public
   */
  changeEmitter.setData = function setData(newData) {
    var oldData = data;
    data = newData;
    emitOnDiff(oldData);

    // set the data here
  };

  /**
   * Get the current data
   *
   * public
   */
  changeEmitter.getData = function getData() {
    return data;
  };

  return changeEmitter;
};
