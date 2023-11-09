const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([2022, 2023, 2024]), [2023]); // => should PASS
assertArraysEqual(middle([1, 2]), []); // => should PASS
assertArraysEqual(middle(["Heelo", "October", "22", 2023]), ["October", 2023]); // => should FAIL
assertArraysEqual(middle(["Jun", "July", "Monday", 10]), ["Monday"]); // => should FAIL