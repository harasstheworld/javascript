var a = ["first", "second"];

console.log("a's contents:", a);
console.log("a's length:", a.length);

let a = ["first", "second"];

// first = 'first'
let first = a[0];

// last = 'second'
let last = a[a.length - 1];

console.log("a[0]:", first);
console.log("a[a.length - 1]:", last);

var a = ["first", "second"];

a.forEach(function (e, i, array) {
  // 'i' is the index
  // 'e' is the element
  console.log(i + " " + e);
});

var a = ["first", "second", "third"];
console.log("Original Array:", a);

// Remove the last element from the array
let removed = a.pop();

console.log("Modified Array:", a);
console.log("Removed Element:", removed);

var a = ["first", "second", "third"];
console.log("Original Array:", a);

// Remove the first element from the array
let removed = a.shift();

console.log("Modified Array:", a);
console.log("Removed Element:", removed);

var a = ["first", "second"];

// Append 'third' to array 'a'
a.push("third");

console.log("a:", a);

var a = ["first", "second", "third"];
console.log("Original Array:", a);

// Insert element at the beginning of the array
a.unshift("fourth");

console.log("Modified Array:", a);

var a = ["first", "second", "third", "fourth"];

let position = a.indexOf("second");

console.log("a:", a);
console.log("position:", position);

var a = ["first", "second", "third", "fourth", "fifth"];
console.log("Original Array:", a);

let position = 1;
let elementsToRemove = 2;
// Remove 'elementsToRemove' element(s) starting at 'position'
a.splice(position, elementsToRemove);

console.log("Modified Array:", a);

var a = ["first", "second", "third", "fourth"];
console.log("a:", a);

// Shallow copy array 'a' into a new object
let b = a.slice();

console.log("b:", b);

var a = ["c", "a", "d", "b", "aa"];
var b = [9, 2, 13, 7, 1, 12, 123];

// Sort in ascending lexicographical order using a built-in
a.sort();
b.sort();

console.log("a:", a);
console.log("b:", b);

var a = ["c", "a", "d", "b", "aa"];
var b = [9, 2, 13, 7, 1, 12, 123];

// Sort in descending lexicographical order using a compare function
a.sort(function (x, y) {
  return x < y;
});
b.sort(function (x, y) {
  return x < y;
});

console.log("a:", a);
console.log("b:", b);
