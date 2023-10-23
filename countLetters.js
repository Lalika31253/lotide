const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Faild: ${actual} !== ${expected}`);
  }
}

const countLetters = function (string) {
  let result = {};

  //iterate over the string
  for (let letter of string) {

    //if a letter is not a space
    if (letter !== " ") {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
    
  }

  return result;
}
console.log(countLetters("lighthouse in the house"));