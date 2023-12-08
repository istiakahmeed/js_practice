var arr = [1, 2, 34, 5, 67, 89, 90];

// let filterArr = arr.filter(function (v) {
//   return v > 34;
// });

// console.log(filterArr);

/* 
How to implement filter methods
*/

// function myFilter(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(myFilter(arr));

function myArray(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let res = myArray(arr, function (v) {
  return v % 2 !== 0;
});

console.log(res);
