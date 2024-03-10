// Imperative way
const arr = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length - 1; j++) {
    if (!arr[j] || typeof arr[j] !== "number") {
      arr[j] = arr[j + 1];
      arr[j + 1] = undefined;
    }
  }

  if (arr[i] == undefined) {
    count++;
  }
}
arr.length -= count;

console.log(arr);

//Declarative way is easy

const filterArray = arr.filter((value) => typeof value === "number");

console.log(filterArray);

//easy to imperative way

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    newArr.push(arr[i]);
  }
}

console.log(newArr);
