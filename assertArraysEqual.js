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
    console.log("👎👎👎 Assertion Faild: arrays are not equal");
  } else {
    console.log("👍👍👍 Assertion Passed: arrays are equal");
  }
}

assertArraysEqual([4, 7], [4, 7]);
assertArraysEqual([4], [4, 6, 7]);
assertArraysEqual([4, "7"], [4, 7]);
assertArraysEqual([], [4, 6, 7]);