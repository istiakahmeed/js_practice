// What is synchronous?
// Synchronous basically means that you can only execute on thin at a time

// Example:

let a = 10;
let b = 20;

let result = a + b;
console.log(result);
localStorage.setItem("result", result);
let response = localStorage.getItem("result");
if (response) {
  console.log("Success");
} else {
  console.log("Failed");
}
