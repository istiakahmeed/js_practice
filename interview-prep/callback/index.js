// Callback function in javascript

// Q10 - Callback function

function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name");
  callback(name);
}

processUserInput(greeting);
