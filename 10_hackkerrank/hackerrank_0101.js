"use strict";
process.stdin.on("data", function (data) {
  let input = String(data).split(new RegExp("[\n ]+"));
  main(input[0], +input[1], +input[2]);
});
/**** Ignore above this line. ****/

function greetings(name) {
  console.log("Hello, " + name);
}

function sum(a, b) {
  return a + b;
}

function main(name, a, b) {
  greetings(name);
  console.log(sum(a, b));
}

//
process.stdin.on("data", function (data) {
  main(+data);
});

function main(input) {
  const square = (x) => x * x;
  console.log(square(input));
}

//
process.stdin.on("data", function (data) {
  let input = String(data).split(new RegExp("[\n]+"));
  main(+input[0], +input[1]);
});

function main(factN, fibN) {
  var math = {
    factorial:
      function factorial(n) {
        if (n > 1) {
          return n * factorial(n - 1);
        }
        return 1;
      }
  }
}

var fib = function fibonacci(n) {
  if (n > 2) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  else if (n < 1) {
    return 0;
  }
  return 1;
}

console.log(math.factorial(facN));
console.log(fib(fibN));