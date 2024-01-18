// Async Await

// async function fetchData(apiUrl) {
//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
// const apiUrl = "https://jsonplaceholder.typicode.com/users";
// const apiUrl1 = "https://jsonplaceholder.typicode.com/posts";

// async function getData(api, cb) {
//   try {
//     let data = await fetchData(api);
//     cb(data);
//   } catch (e) {
//     cb(e);
//   }
// }

// getData(apiUrl, (data) => {
//   console.log(data);
// });
// getData(apiUrl1, (data) => {
//   console.log(data);
// });

//Create a new instance

async function fetchData(apiUrl, cb) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    cb(data);
  } catch (e) {
    console.log(e.message);
  }
}

const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetchData(apiUrl, (data) => {
  // try {
  //   console.log(data);
  // } catch (e) {
  //   console.log(e);
  // }
  console.log(data);
});
