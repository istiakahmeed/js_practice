// What is Asynchronous?
/* Asynchronous means that you can multiple things at a time and you don't have to finish
 * execution the current thing in order to move on to next one */

// Example:

setTimeout(() => {
  console.log("I am Asynchronous");
}, 2000);

//Why does like Asynchronous

/* JS is a single threaded languages thats means javascript process one task at a time*/

/** How to handle Asynchronous*/

console.log("I am first Line"); // This line is work synchronously

setTimeout(() => {
  console.log("I am second Line");
}, 2000); /*
This line is a synchronous, 1st call call stack and call stack checking its asynchronous then he passed web api and web api waiting when call stack empty then he passed call back then execution call stack. This working process EVENT LOOPS 
*/
console.log("I am third Line");

// How to handle Asynchronous task
/**
 * callback
 * promise
 * async function
 */

// Handle collection on async operation

/**
 * Async Iterator
 * For Await of loop
 * Async Generator
 */
