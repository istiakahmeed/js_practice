const arr = [2, [3, 4], [10, [5, 6], [6, 7, 8], [2, [34, 35, [18, 19]]]]];
const newArr = [];

function flatArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
}

flatArray(arr);
console.log(newArr);
