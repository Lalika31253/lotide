const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Faild: ${actual} !== ${expected}`);
  }
}

const head = function (array) {
  if (!array || array.length === 0) {
    return;
  } else {
    return array.shift(0);
  }

}


// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Head"]), "Head");
assertEqual(head([]), undefined);