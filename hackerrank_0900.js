// Approach:

document.getElementById('btn1').onclick = action(e) {
  var btn = e.target || e.srcElement;
  document.getElementById((btn.id)).innerHTML++;
}

function action(e) {
  var btn = e.target || e.srcElement;
  document.getElementBy Id(btn.id).innerHTML++;
}


document.getElementById('btn2').addEventListener('click', action);

// eval function
const expression = '5+2-3';
console.log(eval(expression));

// binary numbers to integer strings

const two = '10';
console.log(parseInt(two, 2));
const three = 134;
console.log(three.toString(10));

const result = 3 / 2;
console.log(result);
console.log(Math.floor(result));


