const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns empty array when array has one element: [] for [`Hello`]", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
  it("returns empty array when there is no input in the array: [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns last two elements when array has tree elements: [`Lighthouse`, `Labs`] for [`Hello``, `Lighthouse`, `Labs`]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

