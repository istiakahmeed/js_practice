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

// let obj = {
//   a: 10,
//   b: 20,
// };

// console.log(Object.entries(obj));

// // Array to Object convert

// let arr = [
//   ["a", 10],
//   ["b", 20],
// ];

// console.log(Object.fromEntries(arr));

// Iterator

let arr = [10, 20, 30, 40];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);  //==> it's normal iterator
// }

// function createIterator(collection) {
//   let i = 0;
//   return {
//     next() {
//       return {
//         done: i >= collection.length, //==> own iterator
//         value: collection[i++],
//       };
//     },
//   };
// }

// let iterator = createIterator(arr);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// let itera = arr[Symbol.iterator](); //==> built in iterator in js
// console.log(itera.next());
// console.log(itera.next());
// console.log(itera.next());
// console.log(itera.next());
// console.log(itera.next());

// Generator function

// function* createGenerator() {
//   let count = 0;
//   while (true) {
//     yield count++;
//   }
// }

// let myGen = createGenerator();
// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());

// function* newGenerator(collection) {
//   for (let i = 0; i < collection.length; i++) {
//     yield collection[i];
//   }
// }

// let newGen = newGenerator(arr);

// console.log(newGen.next());
// console.log(newGen.next());
// console.log(newGen.next());
// console.log(newGen.next());
// console.log(newGen.next());

//Set and Map

// let set = new Set(arr);
// set.add(5);

// console.log(set.entries());
// console.log(set.keys());
// console.log(set.values());
// console.log(set.delete(5));

// Map

let map = new Map();
map.set("a", "Minal");
// map.clear();
// map.values();
// map.entries();
// map.size;
map.forEach(function (key) {
  console.log(key);
});
// console.log(map);
