// function* myGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let iterator = myGenerator();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// create a iterator

// function* range(start = 0, stop = 10, step = 5) {
//   for (let i = start; i < stop; i += step) {
//     yield i;
//   }
// }
// const rangeIt = range(1, 10, 3);

// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());

// //use for of loop

// for (const v of rangeIt) {
//   console.log(v);
// }

//real life example

function* generateId() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const generateUserId = generateId();
const generateProductId = generateId();
console.log("User", generateUserId.next().value); // User 1
console.log("User", generateUserId.next().value); // User 2
console.log("User", generateUserId.next().value); // User 3

console.log("Product", generateProductId.next().value); // Product 1
console.log("Product", generateProductId.next().value); // Product 2
console.log("Product", generateProductId.next().value); // Product 3
console.log("Product", generateProductId.next().value); // Product 4
console.log("Product", generateProductId.next().value); // Product 5
console.log("Product", generateProductId.next().value); // Product 6
