# Functions in JavaScript

## Q1 - What is Function Declaration?

Function Declaration is a way to define a function using the `function` keyword followed by the function name and parameters. These functions are hoisted, meaning they can be called before they are defined in the code.

### Example:

```javascript
function square(num) {
  return num * num;
}
```

## Q2 -What is Function Expression?

When i will assign function add in a variable

```javascript
let square = function (num) {
  return num * num;
};
```

## Q3 - What are First Class Function?

When a function treats a variable then we are called this first class function

### Example:

```javascript
function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is" + fn(5));
}

displaySquare(square);
```

## Q4 - What is IIFE?

IIFE means immediately invoke function expression

```javascript
(function square(num) {
  console.log(num * num);
})(5);
```

## - Q4 - IIFE - O/P Based Question?

```javascript
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
//output => 1
```

## Q5 - What is Closure?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

```javascript
function init() {
  var name = "Closure";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();
```

## Q6 - Function Scope - O/P Based Question?

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
//output =>0, 1, 2, 3, 4
```

## Q7 - what is function Hoisting?

In JavaScript, function hoisting is the process of moving function declarations to the top of their scope before the code is executed. This means that the function is accessible and executable before the line it was defined on

```javascript
functionName();
function functionName() {
  console.log("Minal Ahmed");
}

//dont problem in function declaration

// Minal Ahmed

var x = 21;

var fun = function () {
  console.log(x);
  var x = 10;
};

fun();

// Undefined
```

## Q8 - Params vs arguments?

when received value then called this params

when passed value then called this arguments

```javascript
function square(num) {
  // received this value called params
  console.log(num * num);
}

square(5); // this called arguments
```

## Spread vs Rest Operators?

same thing ## Q8

```javascript
function multiply(...nums) {
  // called this rest
  console.log(nums[0] * nums[1]);
}

var arr = [5, 6];
multiply(...arr); // called this spread
```

### -- Callback Functions --

## What is callback function?

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```javascript
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name");
  callback(name);
}

processUserInput(greeting);
```
