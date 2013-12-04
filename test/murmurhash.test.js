/*!
 * node-murmurhash - test/murmurhash.test.js
 *
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var murmurhash = require('../');

describe('murmurhash.test.js', function () {
  it('should return hash number value', function () {
    var v = murmurhash('foo');
    v.should.equal(2197288083);

    murmurhash('hello 中国').should.equal(1248731102);
    murmurhash('hello 中国', 0).should.equal(3760673533);
    murmurhash('hello 中国', 1).should.equal(540531333);

    var keybytes = new Buffer([
      0, 4, 111, 108, 95, 99, 51, 95, 117, 95, 105, 112, 95, -27, -116, -105, -26,
      -98, -127, -25, -69, -110, -25, -122, -108, -24, -98, -115, -28, -72, -109,
      -27, -115, -106, -27, -70, -105, 95, 112
    ]);
    // console.log(murmurhash(keybytes), parseInt(murmurhash(keybytes) % 1023, 10));
    murmurhash(keybytes).should.equal(3300337389);
    parseInt(murmurhash(keybytes) % 1023, 10).should.equal(261);

    var wantBytes = new Buffer([0, 24, 0, 4, 52, 51, 53, 54, 55, 52, 52, 53, 54]);
    murmurhash(wantBytes).should.equal(2351022266);
    parseInt(murmurhash(wantBytes) % 1023, 10).should.equal(494);
  });
});
