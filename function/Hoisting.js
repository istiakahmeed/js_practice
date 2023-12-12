function a() {
  d();
  console.log("I am a");
}

function b() {
  c();
  console.log("I am b");
}
function c() {
  console.log("I am C");
}
function d() {
  b();
  console.log("I am D");
}

a();
