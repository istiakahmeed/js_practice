// let point = {
//   x: 10,
//   y: 20,
// };
// point.x = Math.round(Math.random() * 10);
// console.log(point);

// let obj = Object(); // --> Object constructor
// obj.x = 10;
// console.log(obj);

// Access to object

// let point = {
//   math: 50,
//   physics: 60,
//   chemistry: 70,
//   biology: 80,
//   history: 90,
//   geography: 100,
// };

// console.log(point["physics"]); //--> array notation
// console.log(point.math);  //--> dot notation

// compare two object

// let obj1 = {
//   x: 10,
//   y: 20,
// };

// let obj2 = {
//   x: 10,
//   y: 20,
// };

// if (obj1.x === obj2.x && obj1.y === obj2.y) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//object iteration
// let obj = {
//   x: 10,
//   y: 20,
//   z: 3,
//   w: 40,
// };

// for (let i in obj) {
//   console.log(obj[i]);
// }

//object method
// let obj = {
//   x: 10,
//   y: 20,
//   z: 3,
//   w: 40,
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.assign({ a: 20 }, obj));

// let Person = function (name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;

//   this.eat = function () {
//     console.log(this.name + " is eating");
//   };
// };

// let person = new Person("Minal", 22, "minal@mail.com");

// person.eat();

// Inheritance

// Parent class
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of the parent class
Animal.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

// Child class inheriting from the parent class
function Dog(name, breed) {
  // Call the parent constructor with the current object as the context
  Animal.call(this, name);
  this.breed = breed;
}

// Set up the prototype chain by creating a new object with the parent's prototype
Dog.prototype = Object.create(Animal.prototype);

// Set the constructor of the child class to itself
Dog.prototype.constructor = Dog;

// Adding a method to the prototype of the child class
Dog.prototype.bark = function () {
  console.log("Woof! Woof!");
};

// Create an instance of the child class
const myDog = new Dog("Buddy", "Golden Retriever");

// Call methods from both parent and child classes
myDog.sayHello(); // Output: Hello, I'm Buddy
myDog.bark(); // Output: Woof! Woof!
