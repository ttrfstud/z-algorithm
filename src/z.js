var explicit = function (s, i, k) {
	var l;
	var len;

	l = 0;
	len = s.length;

	if (len <= Math.max(i, k))
		return 0;

	while (s[i++] === s[k++]) 
		l++;

	return l;
};

module.exports = function (s) {
	var len;
	var Z;
	var r;
	var l;

	var k;
	var k_;

	len = s.length;
	Z = [];
	Z[0] = void 0;

	r = l = 0;

	for (k = 1; k < len; k++) {
		if (k > r) {
			Z[k] = explicit(s, 0, k);
			if (Z[k] > 0) {
				r = k + Z[k] - 1;
				l = k;

			}
		} else {
			k_ = k - l;

			if (Z[k_] < Z[l] - k_ + 1) {
				Z[k] = Z[k_];
			} else {
				Z[k] = r - k + 1 + explicit(s, Z[l], r + 1);
				r = k + Z[k] - 1;
				l = k;
			}
		}
	}

	return Z;
};
