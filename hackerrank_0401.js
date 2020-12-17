const arr = ["a", "b", "c", "d"];

for (let i = 0; i < arr.length; i++) {
  console.log("arr[" + i + "]: " + arr[i]);
}

const o = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

for (p in o) {
  console.log(p);
}

arr.forEach((value, index) => {
  console.log(index, value);
});
