/*!
 * node-murmurhash - test/longrunning.js
 *
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var murmurhash = require('../');

var i = 0;

function run() {
  i % 1000 === 0 && console.log(i, murmurhash(i));
  i++;
}

setInterval(run, 1);

// node --trace_gc test/longruning.js
