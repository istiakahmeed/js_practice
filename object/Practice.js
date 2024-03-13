// const obj = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// for (let key in obj) {
//   console.log("KEY:" + key);
//   console.log(key + ": " + obj[key]);
// }
// Object.keys(obj).forEach((key) => {
//   console.log(key + ": " + obj[key]);
// });

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

let entries = Object.entries(obj);
console.log(typeof entries);
// Output: [["name", "John"], ["age", 30], ["city", "New York"]]

let results = Object.fromEntries(entries);

console.log(results);
