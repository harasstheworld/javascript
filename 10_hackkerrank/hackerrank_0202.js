var input = "";
process.stdin.on("data", function (data) {
  input = data;
  switchDemo();
});
function readLine() {
  return input;
}
/**** Ignore above this line. ****/

function switchDemo() {
  var n = parseInt(readLine());

  switch (n) {
    case 2:
      console.log("A");
      break;
    case 3:
      console.log("B");
      break;
    case 4:
      console.log("C");
      break;
    case 5:
      console.log("D");
      break;
    default:
      console.log("E");
  }

  console.log("Exited switch.");
}

var input = "";
process.stdin.on("data", function (data) {
  input = String(data).trim();
  main();
});
/** Ignore above this line. **/

function main() {
  console.log('"' + input + '"');
  console.log("'" + input + "'");
  console.log(input.length);
}

String.charAt();
String.concat();
String.includes();
String.endsWith();
String.indexOf();
String.lastIndexOf();
String.match();
String.normalize();
String.repeat();
String.replace();
String.search();
String.slice();
String.split();
String.startsWith();
String.substr();
String.substring();
String.toLowerCase();
String.toUpperCase();
String.trim();
String.trimLeft();
String.trimRight();
