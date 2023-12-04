function add(a, b) {
  return a + b;
}

function maniPulate(a, b, fun) {
  var c = a + b;
  var d = a - b;
  function multiply() {
    var m = fun(a, b);
    return c * d * m;
  }
  return multiply;
}

var multiply = maniPulate(3, 4, add);

console.log(multiply());
