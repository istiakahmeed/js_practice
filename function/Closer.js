// let b = 10;

// function a() {
//   console.log(b);
// }

// a();

function a() {
  var x = 10;
  return function () {
    console.log(x);
  };
}

var abc = a();

console.log(abc);
