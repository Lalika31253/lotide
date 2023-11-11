const assertEqual = require('./assertEqual');

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
}

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
