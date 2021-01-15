// for
// while
// do-while
// for-in
// for-of
//
for (initialization; condition; finalExpression) {
  statement(s);
}

process.stdin.on("data", function (data) {
  main(+data);
});
/**** Ignore above this line. ****/

function main(input) {
  for (var i = 1; i <= input; i++) {
    process.stdout.write(i + " ");
  }
}

while (condition) {
  statement(s);
}

do {
  statement(s);
} while (condition);

for (var variable in object) {
  // insert code that uses variable here
}

var actress = {
  firstName: "Julia",
  lastName: "Roberts",
  dateOfBirth: "October 28, 1967",
  nationality: "American",
  firstMovie: "Satisfaction",
};

for (var property in actress) {
  console.log("actress." + property + " = " + actress[property]);
}

("use strict");
process.stdin.on("data", function (data) {
  main(String(data).trim().split(new RegExp("[\n]+")));
});
/**** Ignore above this line. ****/

class Monster {
  constructor(name, home, description) {
    this.name = name;
    this.home = home;
    this.description = description;
  }
}

function main(input) {
  var monster = new Monster(input[0], input[1], input[2]);

  // Print array
  console.log(monster);

  // Print each of its elements on a new line
  for (let property in monster) {
    console.log(property + ": " + monster[property]);
  }
}

for (let variable of iterable) {
  statement(s);
}

("use strict");
process.stdin.on("data", function (data) {
  main(String(data).trim());
});
/**** Ignore above this line. ****/

function main(input) {
  // Split the words read as input into an array of words
  var array = input.split(new RegExp("[ \n]+"));

  // Print array
  console.log(array);

  // Print each of its elements on a new line
  for (let value of array) {
    console.log(value);
  }
}
