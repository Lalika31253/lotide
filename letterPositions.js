const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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