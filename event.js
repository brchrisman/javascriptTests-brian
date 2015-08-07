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
  function emitOnDiff(newData) {
    if (newData !== data) {
      changeEmitter.emit('change', newData);
    }
  }

  /**
   * Set the data
   * param newData the data that we're updating to
   *
   * public
   */
  changeEmitter.setData = function setData(newData) {
    emitOnDiff(newData);

    // set the data here
    data = newData;
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
