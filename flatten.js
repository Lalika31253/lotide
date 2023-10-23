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

const flatten = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten(["New", "Activity", ["From", "LHL"], ["Week", 1]])); // => ["New", "Activity", "From", "LHL", "Week", 1]