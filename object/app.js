/* 
Factory pattern in object


let createPerson = function (name, age, weight) {
  return {
    name: name,
    age: age,
    weight: weight,
    eat: function () {
      console.log(name + " always eating");
      console.log(`${name} is ${age} years old`);
    },
  };
};

let person1 = createPerson("Mubin", 18, "90kg");
// console.log(mubin);
person1.eat();

let person2 = createPerson("Minal", 22, "78kg");
console.log(person2.name);

person2.eat();

*/

/**
 * Constructor pattern for object
 */

let CreatePerson = function (name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;

  this.eat = function () {
    console.log(this.name + " is eating");
  };
};

let person1 = new CreatePerson("Minal", 22, "78kg");

for (let i in person1) {
  console.log(i);
}
