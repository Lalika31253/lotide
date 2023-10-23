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

const middle = function (arr) {
  let result = [];

  if (arr.length <= 2) {
    return result;
  } else if (arr.length % 2 === 1) {
    result.push(arr[Math.floor(arr.length / 2)]);
  } else {
    result.push(arr[Math.floor((arr.length / 2) - 1)]);
    result.push(arr[Math.floor(arr.length / 2)])
  }
  return result;
}

assertArraysEqual(middle([2022, 2023, 2024]), [2023]); // => should PASS
assertArraysEqual(middle([1, 2]), []); // => should PASS
assertArraysEqual(middle(["Heelo", "October", "22", 2023]), ["October", 2023]); // => should PASS
assertArraysEqual(middle(["Jun", "July", "Monday", 10]), ["Monday"]); // => should FAIL

