const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays(["Lighthouse Labs"], ["Lighthouse Labs"]), true);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays([], [1, 4]), false);