// Declarative  Way

// let arr = [1, 2, 3, 4, 5];

// arr.map((value) => {
//   console.log(value);
// });

// const numbers = [1, 2, 3, 4];
// const strs = numbers.map((v) => v.toString()); // Clone by original number
// console.log(strs);

//How to Implement map methods

function myMap(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // newArr.push(cb(arr[i]));
    newArr.push(arr[i]);
  }
  return newArr;
}

let name = ["minal", "mubin", "shihab", "nabia"];

let newArr = myMap(name);
console.log(newArr);

let newName = name.filter((n) => n !== "minal");
console.log(newName);
