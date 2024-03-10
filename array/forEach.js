//Imperative Traverse

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//   //   console.log(numbers[i]);
//   console.log(numbers[i] * 2); //  multiply by 2
// }

// sum this numbers array

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
//   console.log(`${numbers[i]} + ${sum - numbers[i]} = ${sum}`);
//   //   console.log(`${sum - numbers[i]}`);
// }

// console.log(sum);

//********** *//

// Declarative Traverse

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

// let sum = 0;

// numbers.forEach((value) => {
//   sum = sum + value;  // sum all the values
//   console.log(sum);
// });

numbers.forEach((value) => {
  if (value % 2 === 0) {
    console.log(value); // ==> even numbers print
  }
});

numbers.forEach((value) => {
  if (value % 2 === 1) {
    //==> print odd numbers
    console.log(value);
  }
});

let sum = 0;
numbers.forEach((value, index) => {
  if (index <= 3) {
    sum = sum + value; // 3 word sum
  }
});
console.log("First 3 Word" + "=" + sum);
