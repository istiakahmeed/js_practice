let arr = [1, 2, 3, 4, 5];

// let res = arr.reduce(function (prev, curr) {
//   return prev + curr;
// });

// console.log(res);

// How to implement this Reduce methods

function myReduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

let res = myReduce(
  arr,
  function (prev, acc) {
    return prev + acc;
  },
  0
);

console.log(res);
