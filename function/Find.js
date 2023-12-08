let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let myFind = arr.find(function (value) {
//   return value === 8;
// });

// console.log(myFind);

function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}

let res = myFind(arr, function (value) {
  return value === 6;
});
console.log(res);
