# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lalika/lotide`

**Require it:**

`const _ = require('@lalika/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function(head)`: function retrieves the first element from the array.
* `function(tail)`: function returns meant to be every element except the head (first element) of the array.
* `function(middle)`: function returns the middle-most element(s) of the given array. 
* `function(eqArrays)`: function compares two arrays for a perfect match.
* `function(assertEqual)`: the function asserts two arrays values.
* `function(assertArraysEqual)`: function for asserting that two arrays are equal.
* `function(without)`: function that filters throught data by removing some unwanted items and returns a new array with only those   elements from source that are not present in the itemsToRemove array.
* `function(flatten)`: function that combines nested array into a single-level array.
* `function(countOnly)`: function takes in a collection of items and returns counts for a specific subset of those items.
* `function(countLetters)`: function returns a count of each of the characters in the given sentence.
* `function(letterPositions)`: function returns all the indices (zero-based positions) in the string where each character is found.
* `function(findKeyByValue)`: function scans the object and returns the first key which contains the given value.
* `function(eqObjects)`: function takes in two objects and returns true or false, based on a perfect match.
* `function(assertObjectsEqual)`: function for asserting that two objects are equal.
* `function(takeUntil)`: function that collects items from a provided array until the callback provided returns a truthy value.
* `function(findKey)`: function scans the object and returns the first key for which the callback returns a truthy value.


 
  
  

 