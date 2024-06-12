// function max5log(n) {
//   for (let i = 0; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }
// max5log(4); //big 0(n)

function min5Log(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

min5Log(4); // big o(1) => 5 assigns
