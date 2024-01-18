//What is AJAX
// Asynchronous javascript and XML

//Example:
let URL_USER = "https://jsonplaceholder.typicode.com/users";
let URL_POST = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL, true);

// xhr.onreadystatechange = function (e) {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     let data = JSON.parse(this.response);
//     console.log(data);
//   } else {
//     console.log(xhr.status);
//   }
// };

// xhr.send();

//create a get request multiple apis

function getRequest(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.response);
      cb(null, response);
    } else {
      cb(xhr.status);
    }
  };
  xhr.send();
}

getRequest(URL_USER, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

getRequest(URL_POST, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
