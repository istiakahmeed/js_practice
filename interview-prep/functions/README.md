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
