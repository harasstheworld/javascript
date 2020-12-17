var actor = {
  Name: "Julia Robert",
  Age: 36,
};

var o = new Object();
o.a = 4;
o.b = "Rome";
o.c = true;

var x = {
  a: 5,
  foo: function () {
    return this.a * this.a;
  },
};

var o = Object.create(x);

// constructor

function Actor(firstName, lastName, Age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.Age = Age;
}
