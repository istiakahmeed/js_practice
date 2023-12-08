// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sqrArr = arr.map(function (value) {
//   return Math.floor(Math.random() * value);
// });

// console.log(sqrArr);

// function myArr() {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     var temp = arr[i];
//     newArr.push(temp);
//   }
//   return newArr;
// }

// console.log(myArr(arr));

// callback function

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myArr(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = cb(arr[i], arr);
    newArr.push(temp);
  }
  return newArr;
}

var sqrArr = myArr(arr, function (value) {
  return value * value;
});
var tArr = myArr(arr, function (value) {
  return value * value * value;
});

console.log(tArr);
