"use strict";

function Fruit(type) {
  this.type = type;
  this.color = "unknow";
  this.getInformation = getFruitInformation;
}

function getFruitInformation() {
  return "This" + this.type + " is " + this.color + ".";
}

let lime = new Fruit("Mexican lime");
console.log(lime.getInformation());
lime.color = "green";
console.log(lime.getInformation());

("use strict");

function Fruit(type) {
  this.type = type;
  this.color = "unknown";
}

// Prototype
Fruit.prototype.getInformation = function () {
  return "This " + this.type + " is " + this.color + ".";
};

let lime = new Fruit("Mexican lime");
console.log(lime.getInformation());

lime.color = "green";
console.log(lime.getInformation());

("use strict");

let lime = new (function () {
  this.type = "Mexican lime";
  this.color = "green";
  this.getInformation = function () {
    return "This " + this.type + " is " + this.color + ".";
  };
})();

console.log(lime.getInformation());

lime.color = "yellow";
console.log(lime.getInformation());

// Classes

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let p = new Polygon(1, 2);

try {
  let p = new Polygon(1, 2);
  console.log("Polygon p:", p);
} catch (exception) {
  console.log(exception.name + ": " + exception.message);
}
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.height * this.width;
  }
}

p = new Polygon(1, 2);
console.log("Polygon p:", p);

// static methods

class Point {
  contructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

try {
  console.log(p1.distance(p1, p2));
} catch (exception) {
  console.log(exception.name + ": " + exception.message);
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name, "speaks.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name, "barks.");
  }
}

// super Keyword
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name, "speaks.");
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name, "barks.");
  }
}

let spot = new Dog("Spot");
spot.speak();
