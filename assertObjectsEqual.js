const eqObjects = function (object1, object2) {

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) { // Check if objects have the same number of keys
    return false;
  };

  for (let val of keys1) {
    if (Array.isArray(object1[val]) && Array.isArray(object2[val])) {
      if (!eqArrays(object1[val], object2[val])) {
        return false;
      }
    } else if (object1[val] !== object2[val]) { //checking if values of the keys are not equal
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  const objAreEqual = eqObjects(actual, expected);

  if (objAreEqual) {
    console.log(`👍👍👍 Objects are equal: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎👎👎 Objects are not equal: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = { hotel: "Malibu", stars: 4 };
const obj2 = { hotel: "Malibu", stars: 4 };
const obj3 = { hotel: "Malibu", stars: 4, reviews: "Preatty quet hotel" };

assertObjectsEqual(obj1, obj2); // Should pass 
assertObjectsEqual(obj1, obj3); // Should fail 


