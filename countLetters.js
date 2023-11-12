const assertEqual = require('./assertEqual');

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

let result = countLetters("lighthouse in the house");

assertEqual(result["h"], 4);
assertEqual(result["i"], 2);

module.exports = countLetters;
