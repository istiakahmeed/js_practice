/* A function can be stored in a variable*/

function userName(n) {
  return n;
}

// let name = userName;

// console.log(name("Minal"));

let arr = [];

arr.push(userName);

console.log(arr[0]("Minal"));
