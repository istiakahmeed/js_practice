// Problem => Give a number 'n', find the first 'n'elements of the fibonacci sequence

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Test the function

// console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
// console.log(fibonacci(0)); // Output: [0]

// Time Complexity: O(n)

// Recursion way
function fibonacciRecursive(n) {
  if (n <= 0) return [0];
  if (n === 1) return [0, 1];

  const fib = fibonacciRecursive(n - 1);
  fib.push(fib[n - 1] + fib[n - 2]);
  return fib;
}

// Test the function
console.log(fibonacciRecursive(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciRecursive(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacciRecursive(0)); // Output: [0]
