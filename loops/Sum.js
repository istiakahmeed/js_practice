// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(sum + "+" + i + "=" + (sum + i));
//   sum += i;
// }

// console.log("result: " + sum);

/* 
1 to 100 even number sum
*/

let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
    console.log(sum + " +" + i + "=" + (sum + i));
  }
}
console.log("result: " + sum);
