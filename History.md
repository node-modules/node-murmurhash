
2.1.0 / 2015-11-26
==================

 * feat: use Math.imul (@alsotang)

2.0.1 / 2015-07-21
==================

 * remove `& 0xff` when retrive byte (@alsotang)
 * simple benchmark. clean code.

2.0.0 / 2015-04-20
==================

 * test: add more boundary test cases
 * feat: pure javascript impl murmurhash v2. Thanks @zhangzifa

1.1.0 / 2015-02-04
==================

 * use node-pre-gyp-qn to prebuild binary package
 * upgrade nan to 1.5.2 support iojs and more node versions

1.0.1 / 2015-01-13
==================

 * Upgrade nan to 1.4.1 for support alinode/iojs

1.0.0 / 2014-09-25
==================

 * bump nan to 1.3.0 support node >= 0.11.13 now
 * add totoro ci tests
 * add missing line to murmur.cc
 * is hard to impl uint32 op in js

0.0.4 / 2014-03-22
==================

  * update deps and add jshint

0.0.3 / 2013-12-10
==================

  * remove node.h, because nan.h had include it

0.0.2 / 2013-12-10
==================

  * .node-gyp/0.11.8/src/node.h:176: error: ‘ssize_t’ does not name a type bug fix

0.0.1 / 2013-12-04
==================

  * add benchmark
  * add logo
  * init
