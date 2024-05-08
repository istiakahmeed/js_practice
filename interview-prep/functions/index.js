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

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
