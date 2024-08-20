// Problem => Give an integer n find the factorial of that integer

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));

// Recursion Way

function facRecursion(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = n * facRecursion(n - 1);
  return result;
}

console.log(facRecursion(5));

function factArr(n) {
  let arr = [1];
  for (let i = 1; i <= n.length; i++) {
    arr[i] = arr[i - 1] * i;
  }
  return arr;
}

console.log(factArr([1, 2, 3, 4, 5]));
