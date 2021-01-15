// This creates a custom object named MyObject
class MyObject {
  // Each object of this type has an attribute named 'magic'
  constructor(magic) {
    this.magic = magic;
  }
  // We'll discuss this syntax in more detail later
}

// Create two objects
var variable1 = new MyObject(":)");
var variable2 = new MyObject(":)");

// Print the result of an equality comparison
console.log(
  variable1.magic +
    " == " +
    variable2.magic +
    " evaluates to " +
    (variable1 == variable2)
);

// Set variable1 to reference the same object as variable2
variable1 = variable2;
// Print the result of an equality comparison
console.log(
  variable1.magic +
    " == " +
    variable2.magic +
    " evaluates to " +
    (variable1 == variable2)
);

process.stdin.on("data", function (data) {
  main(+data);
});
/**** Ignore above this line. ****/

function classifyAge(age) {
  /* First, let's check the lower bound on our age range: */
  if (age < 13) {
    return age + " is a child.";
  } else if (age < 20) {
  /* If this condition is checked, we know that age < 13 is false: */
    return age + " is a teenager.";
  } else if (age >= 20) {
  /* If this condition is checked, we know both of these are false:
   *   age < 13 is false
   *   age < 20 is false
   *  This tells us that either age >= 20 is true, or age is not a number:
   */
    return age + " is an adult.";
  } else {
  /* The input wasn't a number. */
    return "Your input must be an integer.";
  }
}

function main(input) {
  console.log(classifyAge(input));
}
