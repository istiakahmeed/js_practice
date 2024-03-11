const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];

// const index = arr.findIndex((item) => item.id === 4);

// const arr2 = arr.splice(index, 1);
// Mutable method
// console.log(arr2);

// console.log(arr);

const arr2 = arr.filter((item) => item.id !== 4); // Immutable method

console.log(arr2);

console.log(arr);
