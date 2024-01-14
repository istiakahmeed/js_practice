//var, let and const use

// var is a global variable accessing all places in the codebase as,
// if (true) {
//   var x = 10;
// }
// console.log(x);

// let is a local variable only accessing the current scope as,

// if (true) {
//   let x = 10;
//   console.log(x); // it's working
// }

// console.log(x); // not accessible because use let variable

//let and and const same but different is a value not changing the const variable

//Normal function

// function sum(a, b) {
//   return a + b;
// }
// //  ==> it's a normal function
// console.log(sum(1, 2));

// //Arrow function with parameters

// let add = (a, b) => a + b; //Arrow function

// console.log(add(1, 2));

// let sqr = (x) => x * x;

// console.log(sqr(2));

/* Object to Array convert*/

let obj = {
  a: 10,
  b: 20,
};

console.log(Object.entries(obj));

// Array to Object convert

let arr = [
  ["a", 10],
  ["b", 20],
];

console.log(Object.fromEntries(arr));
