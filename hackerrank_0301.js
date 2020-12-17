function sum(a, b) {
  var result = a - b;
  console.error("The sum of " + a + " and " + b + " is " + result);
  return result;
}

("use strict");

const arr = [1, 4, 3, 4, 5];

try {
  arr = [4, 2];
  console.log(arr.sort());
} catch (e) {
  console.log(e.message);
} finally {
  console.log(arr.sort());
}

function throwString() {
  // Generate an exception with a String value
  throw "some exception";
}

function throwFalse() {
  // Generate an exception with a boolean value of false
  throw false;
}

function throwNumber() {
  // Generate an exception with a Number value of -1
  throw -1;
}

try {
  throwString();
} catch (e) {
  console.log(e);
}

try {
  throwFalse();
} catch (e) {
  console.log(e);
}

try {
  throwNumber();
} catch (e) {
  console.log(e);
}

var input = "";
process.stdin.on("data", function (data) {
  input = String(data).trim();
  main();
});
/** Ignore above this line. **/

function throwMyError() {
  // Generate an exception with a value read from stdin
  throw new Error(input);
}

function main() {
  try {
    throwMyError();
  } catch (e) {
    console.log(e.message);
  }
}
