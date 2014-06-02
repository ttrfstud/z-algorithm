var z = require('../z');

var assert = require('assert');

describe('z', function () {
	it('r < k subcase, along with other stuff', function (done) {
		var s = 'aaacaba';

		assert.deepEqual(z(s), [void 0, 2, 1, 0, 1, 0, 1]);

		done();
	});

	it('2a case', function (done) {
		var s = 'abadabade';
		//       |--||-^|
		assert.deepEqual(z(s), [void 0, 0, 1, 0, 4, 0, 1, 0, 0]);

		done();
	});

	it('2b case', function (done) {
		var s = 'ababaababe';
		//       |--| |-^|
		assert.deepEqual(z(s), [void 0, 0, 3, 0, 1, 4, 0, 2, 0, 0]);

		done();
	});
});