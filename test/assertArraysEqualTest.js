const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([4, 7], [4, 7]); //should pass
assertArraysEqual([4], [4, 6, 7]); //should fail
assertArraysEqual([4, "7"], [4, 7]); //should fail
assertArraysEqual([], [4, 6, 7]); //should fail
assertArraysEqual(["LHL", "Week 4"], ["LHL", "Week 4"]); //should pass
