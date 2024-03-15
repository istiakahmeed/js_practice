//Don't use iterator

// let arr = [1, 2, 3, 4, 5];
// let index = 0;

// function next() {
//   return arr[index++];
// }

// let result = next;
// for (let i = 0; i < arr.length; i++) {
//   console.log(result());
// }
// console.log(next());
// console.log(next());
// console.log(next());
// console.log(next());
// console.log(next());
// console.log(next());

// string iterable

let name = "Minal";

let nameIterator = name[Symbol.iterator]();

// console.log(nameIterator.next());
// console.log(nameIterator.next());
// console.log(nameIterator.next());
// console.log(nameIterator.next());
// console.log(nameIterator.next());
// console.log(nameIterator.next());

// for (const v of nameIterator) {
//   console.log(v);
// }

//use by while loop

while (true) {
  let data = nameIterator.next();
  if (data.done) {
    break;
  }
  console.log(data);
}
