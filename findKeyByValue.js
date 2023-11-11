const assertEqual = require('./assertEqual');

const findKeyByValue = function (obj, value) {

  for (let item in obj) { // looping thought all keys

    if (obj[item] === value) { // cheking if any of the keys contain the given value
      return item;
    }
  }

};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine Nine"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
