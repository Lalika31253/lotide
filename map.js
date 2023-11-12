const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function (arr, callback) {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
}
const result1 = map(words, word => word[0]);

const result2 = map(words, word => word + " LHL");

const result3 = map(words, word => word.slice(0, 2));

assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(result2, ['ground LHL', 'control LHL', 'to LHL', 'major LHL', 'tom LHL']); // => should pass 
assertArraysEqual(result3, ['gr', 'co', 'to', 'ma', 'to']);

module.exports = map;



