TESTS = test/*.test.js
REPORTER = spec
TIMEOUT = 1000
MOCHA_OPTS =

install:
	@npm install --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist

jshint: install
	@./node_modules/.bin/jshint lib/

test: install
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-cov cov:
	@$(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=travis-cov

test-cov-html:
	@rm -f coverage.html
	@$(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=html-cov > coverage.html
	@ls -lh coverage.html

test-coveralls: test
	@echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@-$(MAKE) test MOCHA_OPTS='--require blanket' REPORTER=mocha-lcov-reporter | ./node_modules/.bin/coveralls

test-all: test test-cov

totoro:
	@totoro --runner test/murmurhash.test.js \
		-b 'linux/node/0.11,linux/node/0.10,windowsXP/node/0.11,windows7/node/0.11,windowsXP/node/0.10,windows7/node/0.10'

autod: install
	@./node_modules/.bin/autod -w --dep nan
	@$(MAKE) install

.PHONY: test
