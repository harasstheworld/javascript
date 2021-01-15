// Template literals

const a = 2;
const b = 3;

console.log("The sum of a and b is " + (a + b) + ".\n");
console.log(`The sum of a and b is ${a + b}`);

var a = 5;
var b = 10;

function foo(strings, ...values) {
  console.log("." + strings[0] + ".");
  console.log("." + strings[1] + ".");
  console.log("." + strings[2] + ".");
  console.log("." + strings[3] + ".");
  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);
}

foo`Sum ${a + b}
Product ${a * b}
Division ${b / a}`;
