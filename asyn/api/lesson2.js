// What is Promise?
/**
 *In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a cleaner and more structured way to work with asynchronous code compared to traditional callback functions.
 */

//Example:

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p1");
//   }, 2000);
// });

// p1.then((v) => {
//   console.log(v);
// }).catch((err) => {
//   console.log(err);
// });

// some real life examples

// function getPhone(isPass) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isPass) {
//         resolve("I have got a phone");
//       } else {
//         reject("I don't have a phone");
//       }
//     }, 2000);
//   });
// }

// // Example usage
// getPhone(true)
//   .then((result) => {
//     console.log(result); // I have got a phone
//   })
//   .catch((error) => {
//     console.error(error); // This will not be executed in this example
//   });

// fetch api
// let url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then((res) => {
//     console.log(res.json());
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Function to make a simple GET request to an API using fetch
function fetchData(apiUrl) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Example usage:
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// fetchData(apiUrl)
//   .then((data) => {
//     data.map((v) => {
//       console.log(v.name);
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

function getData(apiUrl) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

getData(apiUrl)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
