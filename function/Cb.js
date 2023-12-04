// function sample(a, b, cb) {
//   var c = a + b;
//   var d = a - b;
//   var result = cb(c, d);
//   return result;
// }

// // function cb(c, d) {
// //   return c - d;
// // }

// var res = sample(20, 10, function (c, d) {
//   return c + d;
// });
// console.log(res);

function multiply(a, b, cb) {
  var c = a + b;
  var d = a - b;
  var result = cb(c, d);
  return result;
}

function cb(c, d) {
  return c * d;
}

var res = multiply(2, 3, cb);
console.log(res);
