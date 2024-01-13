//var, let and const use

// var is a global variable accessing all places in the codebase as,
// if (true) {
//   var x = 10;
// }
// console.log(x);

// let is a local variable only accessing the current scope as,

if (true) {
  let x = 10;
  console.log(x); // it's working
}

// console.log(x); // not accessible because use let variable

//let and and const same but different is a value not changing the const variable
