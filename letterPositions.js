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

const letterPositions = function (sentence) {
  const results = {};

  //iterate over the string
  for (let i = 0; i < sentence.length; i++) {

    //check if a string has spaces
    if (sentence[i] === " ") {
      continue;
    } else if (results[sentence[i]]) { //check if a letter is repeating in the sentence
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i]; // if there is no letter yet print just one position of it
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").e, [1]);