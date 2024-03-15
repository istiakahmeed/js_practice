//Synchronous programming
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

//Asynchronous programming

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// setTimeout(() => {
//   console.log(3);
// }, 0);
// setTimeout(() => {
//   console.log(4);
// }, 0);

// console.log(5);

function main() {
  setTimeout(() => {
    console.log("load last");
  }, 10);

  setTimeout(() => {
    console.log("load first");
    test();
  }, 0);

  test();
}

function test() {
  console.log("test");
}

main();
