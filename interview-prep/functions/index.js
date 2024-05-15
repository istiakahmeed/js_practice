// //Functions in JavaScript

// //Q1 - What is Function Declaration?
// //Answer - What is Function Declaration
// function square(num) {
//   return num * num;
// }

// //Q2 - What is Function Expression?
// //Answer - What is Function Expression
// //When i will assign function add in a variable
// let square = function (num) {
//   return num * num;
// };

// //Q3 - What are First Class Function?
// //Answer - What are First Class Function
// //When a function treats a variable then we are called this first class function
// function square(num) {
//   return num * num;
// }

// function displaySquare(fn) {
//   console.log("Square is" + fn(5));
// }

// displaySquare(square);

// Q4 - What is IIFE?

// (function square(num) {
//   console.log(num * num);
// })(5);

// Q4 - IIFE - O/P Based Question?

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

// Q5 - What is Closure?

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// Q6 - Function Scope - O/P Based Question?

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// Q7 - What is Function  Hoisting?

// functionName();
// function functionName() {
//   console.log("Minal Ahmed");
// }

// // Minal Ahmed

// var x = 21;

// var fun = function () {
//   console.log(x);
//   var x = 10;
// };

// fun();

// // Undefined

// Q8 - Params vs arguments

// function square(num) {
//   // received this value called params
//   console.log(num * num);
// }

// square(5); // this called arguments

// Q9 - Spread vs Rest Operators?

function multiply(...nums) {
  // called this rest
  console.log(nums[0] * nums[1]);
}

var arr = [5, 6];
multiply(...arr); // called this spread
