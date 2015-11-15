/**!
 * node-murmurhash - lib/murmurhash.js
 *
 * Copyright(c) 2013 - 2014 fengmk2 <fengmk2@gmail.com> (http://fengmk2.com)
 * Copyright(c) 2015 node-modules
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var murmur = require('./murmur');


/**
 * Murmur hash v2
 *
 * @param {Buffer|String} key
 * @param {Number} seed default is 97
 * @return {Number} hash value
 */
function murmurhash(key, seed) {
  if (typeof key === 'string') {
    key = new Buffer(key);
  } else if (!Buffer.isBuffer(key)) {
    key = new Buffer(String(key));
  }
  if (typeof seed !== 'number') {
    seed = 97;
  }
  return murmur(key, seed);
}

module.exports = murmurhash;
module.exports.murmur = murmur;
