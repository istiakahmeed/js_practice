//Closure is when a function is able to remember and access it's lexical scope even when that function executing outside its scope

// function test() {
//   let msg = "I am Learning Lexical Scope and closures";

//   function sayMsg() {
//     console.log(msg);
//   }
//   sayMsg();
// }

// test();

function test() {
  let msg = "I am Learning Lexical Scope and closures";

  return function () {
    console.log(msg);
  };
}

let sayMsg = test();
sayMsg();
