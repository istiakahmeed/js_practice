// create a normal error handler

// let num = 20;
// if (num > 5) {
//   //   throw new Error("Invalid number");
//   console.log("Invalid number");
// }

// function createErrorHandler(v) {
//   let num = parseInt(v);
//   if (!num) {
//     // throw new Error("Invalid number"); // TODO js built in error
//     console.log("Invalid number");
//     return;
//   }
//   return num;
// }
//==> using if else error handling
// console.log(createErrorHandler("20.454"));
// console.log(createErrorHandler("whwrhwu"));

// try catch all exceptions

// function createInt(v) {
//   try {
//     let num = parseInt(v);
//     return num;
//   } catch (e) {
//     console.log(e);
//     console.log("Invalid number");
//     return undefined;
//   }
// }

// console.log(createInt("20.454"));
// console.log(createInt("sgfgsuilf"));

function exampleErrorHandling(text) {
  try {
    // Code that might throw an exception
    let result = text.trim();
    let words = result.split(" "); // This will throw a division by zero error
    console.log(words); // This line will not be executed
  } catch (error) {
    // Catch block handles the exception
    console.log("An error occurred:", error.message);
  } finally {
    // Finally block (optional) always executes
    console.log("This will always be executed.");
  }
}

// exampleErrorHandling("My name is Minal");
// exampleErrorHandling(4785); // throws error

// create a custom error handler

class CustomError extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

try {
  console.log("I am 1");
  throw new CustomError("My name is Error");
} catch (e) {
  console.dir(e);
}
