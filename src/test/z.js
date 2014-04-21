var z = require('../z');

var should = require('should');

describe('z', function () {
	it('r < k subcase, along with other stuff', function (done) {
		var s = 'aaacaba';

		z(s).should.eql([void 0, 2, 1, 0, 1, 0, 1]);

		done();
	});

	it('2a case', function (done) {
		var s = 'abadabade';
		//       |--||-^|
		z(s).should.eql([void 0, 0, 1, 0, 4, 0, 1, 0, 0]);

		done();
	});

	it('2b case', function (done) {
		var s = 'ababaababe';
		//       |--| |-^|
		z(s).should.eql([void 0, 0, 3, 0, 1, 4, 0, 2, 0, 0]);

		done();
	});
});