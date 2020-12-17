"use strict";
process.stdin.on("data", function (data) {
  main(+data);
});

function main(input) {
  var a = input;
  if (a % 2 == 1) {
    var a = input + 1;
    console.log("if(a): " + a);
  }

  console.log("main(a): " + a);
}

// var, let, const
//
// unary
// binary
// ternary
//
// addition +
// subtraction -
// division /
// multiplication *
// remainder %
// exponentiation **
// unary negation -
// unary plus +
// increment ++, prefix and postfix
// decrement --
