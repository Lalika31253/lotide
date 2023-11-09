const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE for head function
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Head"]), "Head");
assertEqual(head([]), undefined);