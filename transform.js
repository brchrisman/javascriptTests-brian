'use strict';

/////////////////////////////////////////////////////////////////////////////
//  TRANSFORM TEST
//
//  Copyright Scale Computing 2015
//  DO NOT DISTRIBUTE OR REPRODUCE ONLINE IN ANY FORM
/////////////////////////////////////////////////////////////////////////////

/**
 * Transform an array to a new array with given function
 * param a the array to be transformed
 * param f the function that does the transforming
 *
 * Fill in the following function using a simple for loop
 *
 * you can assume all arrays will not be sparse and will start at the 0 index
 */
module.exports = function arrayTransform(a, f) {
    return a.map(f);
};
