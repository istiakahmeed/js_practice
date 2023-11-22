// function testFunc( a, b){
//   const result = a + b + Math.max(a, b)
// //   console.log(result)
//  return result
// }

//  const bewFn= testFunc(10 , 30)

// console.log(bewFn);

/**
 * Function: Sleep
 * Param: name
 * Definition: How to sleep
 */

// function Sleep(name) {
//     console.log(`${name} is sleeping`);
// }

/**
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */

// function Awake (name) {
//     console.log(`${name} is awake`);
// }

/**
 * Function: Eat
 * Param: name
 * Param: Time
 * Definition: How to eat
 */

// function Eat ( name, time){
//     console.log(`${name} is taking ${time}`);
// }

/**
 * Function: Go_To
 * Param: name
 * Param: Destination
 * Param: Transport_system
 * Definition: How to walk
 */

// function GoTo(name, destination, transport){
//     console.log(`${name} going to ${destination} by ${transport}`);
// }

/**
 * Function: Work
 * Param: name
 * Definition: How to work
 */

// function Work(name) {
//     console.log(`${name} is working`);
// }

/**
 * Function: Study
 * Param: name
 * Definition: How to Study
 */

// function Study(name) {
//     console.log(`${name} is Study`);
// }

/**
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Param: Transport_system
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Go_To -> name, 'office', Transport_system
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Go_To -> name, 'home', Transport_system
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

// function JobHolderLifecycle (name, transport){
//   Awake(name)
//   Eat(name, 'breakfast')
//   GoTo(name, 'office', transport )
//   Work(name)
//   Eat(name, 'Lunch')
//   GoTo(name, 'home', transport)
//   Eat(name, 'Dinner')
//   Sleep(name)
// }

// console.log('-------jobHolderLifecycle-------');
// JobHolderLifecycle('Minal', 'bus')

/**
 * Function: Student_Lifecycle
 * Param: name
 * Param: Transport_system
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Go_To -> name, 'School', Transport_system
 * - Eat -> name, 'lunch'
 * - Go_To -> name, 'home', Transport_system
 * - Study -> name,
 * - Eat -> name, 'dinner'
 * - Study -> name,
 * - Sleep -> name
 */

// function StudentLifecycle(name, transport){
//   Awake(name)
//   Eat(name, 'Breakfast')
//   GoTo(name, 'School', transport )
//   Eat(name, 'Lunch')
//   GoTo(name, 'home', transport)
//   Study(name)
//   Eat(name, 'Dinner')
//   Study(name)
//   Sleep(name)
// }

// console.log('-------studentlifecycle-------');
// StudentLifecycle('Mobin', 'rikshaw')

// function sub (a){
//   const result = Math.floor(Math.random() * a)
//   return result

// }

// const sb= sub(5)
// console.log(sb);

/* Pure functions 

function sum(a,b){
    return a + b;
}

sum(10, 20)


let limit = 100
function changeLimit (){
   limit = 500
}

changeLimit(limit)

console.log(limit)

*/

/*callback function */

// function generateTwoRandNumber ( max, cb){
//     const random1 = Math.floor(Math.random() * max)
//     const random2 = Math.floor(Math.random() * max)
//     const result = cb(random1, random2)
//     return result
// }

// const sum =  generateTwoRandNumber(1000 , (random1, random2) => random1 * random2)

// console.log(sum);

/** Return function */

function power(p) {
  return function (n) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result *= n;
    }
    return result;
  };
}

const sqr = power(2);
const cube = power(3);
const power8 = power(8);

console.log("SQR", sqr(2));
console.log("CUBE", cube(3));
console.log("power8", power8(8));

// IIFE

// (function (name){
//     console.log(name)
// })("Minal");

// (()=>{
//     console.log('tom');
// })();

// let numbers = [1, 2, 3, 4, 5, 6];
// let maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// let numbers = [1,3,4,5,6,7,8,9,10,11,12]

// function maxNumber(){
//     let number = Math.min(...numbers)
//     return number
// }

// console.log(maxNumber());

// অ্যাসিনক্রোনাস টাস্কের একটা উদাহরণ দেখি আমরা

// console.log(1);

// setTimeout(()=>{
//   console.log(2);
// }, 0 )

// setTimeout(()=>{
//   console.log(3);
// },0)
// setTimeout(()=>{
//   console.log(4);
// },0)
// setTimeout(()=>{
//   console.log(5);
// },0)

// console.log(6);

// function main(){
//   setTimeout(() => {
//     console.log("second load");
//   }, 10);

//   setTimeout(() => {
//     console.log("first load")
//     test()
//   }, 0);
//   test()
// }

// function test(){
//   console.log("test");
// }

// main()

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(1000).then(() => {
// 	console.log('Done in 1000ms');
// });

// wait(2000).then(() => {
// 	console.log('Done in 2000ms');
// });

// wait(3000).then(() => {
// 	console.log('Done in 3000ms');
// });
