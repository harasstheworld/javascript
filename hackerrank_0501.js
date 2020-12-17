"use strict";

const makeArray = (...values) => {
  return values;
};

const getSum = (a, b) => {
  return a + b;
};

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((a, b) => {
  return a + b;
}, 0);

const sumNext = arr.reduce((a, b) => a + b, 0);
