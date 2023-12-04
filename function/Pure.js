function sqr(n) {
  return n * n;
} /* ------> pure function */

console.log(sqr(2));

// var n = 2;

// function change() {
//   var n = 10;
//     console.log(n);  ----> not a pure function
// }
// change();
// console.log(n);

var point = {
  x: 10,
  y: 20,
};

function change() {
  point.x = 20;
  point.y = 30;
  console.log(point);
}

change();
