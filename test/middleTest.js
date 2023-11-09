const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns two elements when array has an even numbers of elements: [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns one element when the array has an odd numbers of elements: [2023] for [2022, 2023, 2024]", () => {
    assert.deepEqual(middle([2022, 2023, 2024]), [2023]);
  });
  it("returns empty array when the array has two elements: [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns empty array when there is no input in the array: [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
});
