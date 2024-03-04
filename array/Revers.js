let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myArr = arr.reverse();

console.log(myArr);

// Implementation of Reverse Array own my function
// function myRevers(arr) {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// let originalArray = [1, 2, 3, 4, 5];
// let reversedArray = myRevers(originalArray);
// console.log(reversedArray);

// Implementation of Array.prototype

// Adding a custom reverse method to the Array prototype
Array.prototype.myReverse = function () {
  let newArr = [];
  for (let i = this.length - 1; i >= 0; i--) {
    newArr.push(this[i]);
  }
  return newArr;
};

// Now you can use myReverse on any array
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = originalArray.myReverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
