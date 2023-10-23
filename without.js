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

const without = function (source, itemsToRemove) {
  const result = [];

  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([2022, 2023, 2024], [2023]), [2022, 2024]); // => should PASS
assertArraysEqual(without(["Jun", "July", "Monday", 10], ["Monday", "10"]), ["Jun", "July"]); // => should FAIL
