const assertEqual = require('./assertEqual');

const head = function (array) {
  if (!array || array.length === 0) {
    return;
  } else {
    return array.shift(0);
  }
}

module.exports = head;