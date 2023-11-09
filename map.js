const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`👎👎👎 Assertion Faild: arrays are not equal ${arr1} !== ${arr2}`);
  } else {
    console.log(`👍👍👍 Assertion Passed: arrays are equal ${arr1} === ${arr2}`);
  }
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function (arr, callback) {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
}
const result1 = map(words, word => word[0]);
console.log("Result1", result1);

const result2 = map(words, word => word + " LHL");
console.log("Result2", result2);

const result3 = map(words, word => word.slice(0, 2));
console.log("Result3", result3);

assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(result2, ['ground LHL', 'control LHL', 'to LHL', 'major LHL', 'tom LHL']); // => should pass 
assertArraysEqual(result3, ['gr', 'co', 'to', 'ma', 'to']);



