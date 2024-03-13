// const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];

// let filterArr = numbers.filter((v) => v);
// const strs = filterArr.map((v) => v.toString());

// // let newArr = [];
// // for (let i = 0; i < numbers.length; i++) {
// //   if (typeof numbers[i] === "number" && !isNaN(numbers[i])) {
// //     newArr.push(numbers[i]);
// //   }
// // }

// console.log(strs);

// How sum use reduce method

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = numbers.reduce((acc, curr) => acc + curr);

// console.log(sum);

// const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
// const result = numbers.reduce((acc, cur) => {
//   acc += cur.toString();
//   return acc;
// }, "");

// console.log(result);

// const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
// const result = numbers.reduce((acc, cur, index) => {
//   if (cur) {
//     acc = acc + cur.toString() + (index < numbers.length - 1 ? ", " : "");
//     (",");
//   }
//   return acc;
// }, []);

// console.log(result);

// const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
// const result = numbers.reduce((acc, cur) => {
//   if (cur) {
//     acc.push(cur.toString());
//   }
//   return acc;
// }, []);
// console.log(result);

// let arr = ["Minal", "Tom", "Mubin", "Nabia"];

// let results = arr.reduce((acc, curr) => {
//   if (curr) {
//     acc.push(curr);
//   }

//   console.log("ACC :" + acc);
//   console.log("CURR :" + curr);
//   return acc;
// }, []);

// console.log(results);

// Implements the Reduce method

function myReduce(arr, cb, init) {
  let acc = init;
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}
let newArr = [1, 2, 3, 4, 5];

let value = myReduce(newArr, (acc, curr) => acc + curr, 0);

console.log(value);

const arr = [1, 2, "", false, 3, NaN, false, 4, 5, NaN, 6];
const result = myReduce(
  arr,
  (acc, cur) => {
    if (cur) {
      acc.push(cur ** 2);
    }
    return acc;
  },
  []
);
console.log(result);
