'use strict';

var should = require('should');
var murmurhash = require('../');

describe('murmurhash.test.js', function () {
  it('should return hash number value', function () {
    var v = murmurhash('foo');
    v.should.equal(2197288083);

    murmurhash('a').should.equal(3914231485);
    murmurhash('z').should.equal(2176583841);
    murmurhash('hello').should.equal(867496620);
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

  it('should support not string type', function () {
    murmurhash('1').should.equal(murmurhash(1));
  });

  it('should work with large buffer', function () {
    var buf = new Buffer([
      0x0,  0x1,  0x2,  0x3,  0x4,  0x5,  0x6,  0x7,  0x8,  0x9,  0xa,  0xb,
      0xc,  0xd,  0xe,  0xf,  0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17,
      0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23,
      0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f,
      0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b,
      0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47,
      0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53,
      0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f,
      0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b,
      0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77,
      0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f,
      0xffffff80, 0xffffff81, 0xffffff82, 0xffffff83, 0xffffff84, 0xffffff85,
      0xffffff86, 0xffffff87, 0xffffff88, 0xffffff89, 0xffffff8a, 0xffffff8b,
      0xffffff8c, 0xffffff8d, 0xffffff8e, 0xffffff8f, 0xffffff90, 0xffffff91,
      0xffffff92, 0xffffff93, 0xffffff94, 0xffffff95, 0xffffff96, 0xffffff97,
      0xffffff98, 0xffffff99, 0xffffff9a, 0xffffff9b, 0xffffff9c, 0xffffff9d,
      0xffffff9e, 0xffffff9f, 0xffffffa0, 0xffffffa1, 0xffffffa2, 0xffffffa3,
      0xffffffa4, 0xffffffa5, 0xffffffa6, 0xffffffa7, 0xffffffa8, 0xffffffa9,
      0xffffffaa, 0xffffffab, 0xffffffac, 0xffffffad, 0xffffffae, 0xffffffaf,
      0xffffffb0, 0xffffffb1, 0xffffffb2, 0xffffffb3, 0xffffffb4, 0xffffffb5,
      0xffffffb6, 0xffffffb7, 0xffffffb8, 0xffffffb9, 0xffffffba, 0xffffffbb,
      0xffffffbc, 0xffffffbd, 0xffffffbe, 0xffffffbf, 0xffffffc0, 0xffffffc1,
      0xffffffc2, 0xffffffc3, 0xffffffc4, 0xffffffc5, 0xffffffc6, 0xffffffc7,
      0xffffffc8, 0xffffffc9, 0xffffffca, 0xffffffcb, 0xffffffcc, 0xffffffcd,
      0xffffffce, 0xffffffcf, 0xffffffd0, 0xffffffd1, 0xffffffd2, 0xffffffd3,
      0xffffffd4, 0xffffffd5, 0xffffffd6, 0xffffffd7, 0xffffffd8, 0xffffffd9,
      0xffffffda, 0xffffffdb, 0xffffffdc, 0xffffffdd, 0xffffffde, 0xffffffdf,
      0xffffffe0, 0xffffffe1, 0xffffffe2, 0xffffffe3, 0xffffffe4, 0xffffffe5,
      0xffffffe6, 0xffffffe7, 0xffffffe8, 0xffffffe9, 0xffffffea, 0xffffffeb,
      0xffffffec, 0xffffffed, 0xffffffee, 0xffffffef, 0xfffffff0, 0xfffffff1,
      0xfffffff2, 0xfffffff3, 0xfffffff4, 0xfffffff5, 0xfffffff6, 0xfffffff7,
      0xfffffff8, 0xfffffff9, 0xfffffffa, 0xfffffffb, 0xfffffffc, 0xfffffffd,
      0xfffffffe, 0xffffffff
    ]);
    // c++ => 2673451384
    murmurhash(buf).should.equal(2673451384);
  });

  it('should emtpy string got 3397915750', function () {
    murmurhash('').should.equal(3397915750);
    murmurhash(new Buffer('')).should.equal(3397915750);
    murmurhash(new Buffer([])).should.equal(3397915750);
  });

  it('should work with boundary cases: buffer mod length equal to 0,1,2,3', function () {
    // @zhangzifa:
    // 要覆盖到buffer的长度对4取模后余0/1/2/3个字节的情况
    // 并且这些尾数要分正负数情况

    var b = new Buffer([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    murmurhash(b).should.equal(1543150919);
    var b1 = new Buffer([1, 2, 3, 4, 5, 6, 7, 8]);
    murmurhash(b1).should.equal(3881185275);
    var b2 = new Buffer([1, 2, 3, 4, 5, 6, 7]);
    murmurhash(b2).should.equal(782934980);
    var b3 = new Buffer([1, 2, 3, 4, 5, 6]);
    murmurhash(b3).should.equal(764621759);

    var nb = new Buffer([-1, -2, -3, -4, -5, -6, -7, -8, -9]);
    murmurhash(nb).should.equal(1119296559);
    var nb1 = new Buffer([-1, -2, -3, -4, -5, -6, -7, -8]);
    murmurhash(nb1).should.equal(3332328025);
    var nb2 = new Buffer([-1, -2, -3, -4, -5, -6, -7]);
    murmurhash(nb2).should.equal(1302582711);
    var nb3 = new Buffer([-1, -2, -3, -4, -5, -6]);
    murmurhash(nb3).should.equal(85049495);

    var bnb =  new Buffer([22, 145, 123, 149, 111, 156, 138, 238, 219]);
    murmurhash(bnb).should.equal(2935442895);
    var bnb1 = new Buffer([45, 222, 147, 158, 233, 156, 138, 238]);
    murmurhash(bnb1).should.equal(2003139132);
    var bnb2 = new Buffer([34, 255, 234, 168, 222, 145, 138]);
    murmurhash(bnb2).should.equal(2619540178);
    var bnb3 = new Buffer([88, 254, 222, 168, 134, 145]);
    murmurhash(bnb3).should.equal(3356056646);
  });
});
