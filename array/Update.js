// const arr = [1, 2, 3, 4];

// arr[4] = 5;

// console.log(arr);

// dont no index

const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];

// const index = arr.findIndex((item) => item.id === 4); // using by findIndex method

// arr[index].value = 400;

const obj = arr.find((item) => item.id === 4); // using by find method

obj.value = 400;
console.log(arr);
