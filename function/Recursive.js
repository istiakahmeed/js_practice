// function sayHi(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log("I am Tom");
//   sayHi(n - 1);
// }

// sayHi(5);
function sumEven(n) {
  if (n <= 0) {
    return 0; // Base case: stop recursion when n is non-positive
  }

  let currentNumber = n % 2 === 0 ? n : 0; // Add n to sum if it's even, otherwise add 0
  return currentNumber + sumEven(n - 1); // Recursively sum even numbers up to n-1
}

console.log(sumEven(5)); // Example usage: Sum of even numbers up to 5

function sumOdd(n) {
  if (n <= 0) {
    return 0;
  }
  let currentNumber = n % 2 == 1 ? n : 0;
  return currentNumber + sumOdd(n - 1);
}

console.log(sumOdd(5));

function factNum(n) {
  if (n == 1) {
    return 1;
  }
  return n * factNum(n - 1);
}

console.log(factNum(5));

let arr = [1, 2, 3, 4, 5];

function sumOfArray(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
}

console.log(sumOfArray(arr, arr.length - 1));
