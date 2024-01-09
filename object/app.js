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

// let CreatePerson = function (name, age, weight) {
//   this.name = name;
//   this.age = age;
//   this.weight = weight;

//   this.eat = function () {
//     console.log(this.name + " is eating");
//   };
// };

// let person1 = new CreatePerson("Minal", 22, "78kg");

// for (let i in person1) {
//   console.log(i);
// }

/**
 * using function and prove function is a object
 */

// let Rect = new Function(
//   "width",
//   "height",
//   `
//     this.width = width
//     this.height = height

//     this.draw = function(){
//       console.log(this.width + "  I am width")
//       console.log(this.height + " I am height")
//     }
//     `
// );

// let rect = new Rect(4, 5);
// rect.draw();

//Apply , Call, Bind methods about//

// function myFun(c, d) {
//   console.log(this.a + this.b + c + d);
// }

//myFun.call({ a: 20, b: 20 }, 10, 20); //--> call method 1st parameter is a object and 2nd argument do provide

//myFun.apply({ a: 20, b: 20 }, [10, 10]); //--> apply method 2nd parameter is a array

// let testBind = myFun.bind({ a: 10, b: 20 }, 5, 5); //--> bind method it just keep binding
// testBind();

// using privet attributes in object
//======================================\\

// const _name = Symbol("name");
// const _email = Symbol("email");
// const _age = Symbol("age");
// const _address = Symbol("address");
// class Person {
//   constructor(name, email, age, address) {
//     this[_name] = name;
//     this[_email] = email;
//     this[_age] = age;
//     this[_address] = address;
//   }
//   sendMsg() {
//     console.log(`${this[_name]} sent message`);
//     console.log(`${this[_email]} sent Email`);
//   }
// }

// let p1 = new Person("Minal", "minal@gmail.com", 22, "Lalpur");

// console.log(p1);

// using getter and setter in object
//======================================\\

const _name = Symbol("name");
const _email = Symbol("email");
const _age = Symbol("age");
const _address = Symbol("address");
class Person {
  constructor(name, email, age, address) {
    this[_name] = name;
    this[_email] = email;
    this[_age] = age;
    this[_address] = address;
  }
  get name() {
    return this[_name];
  }
  set name(value) {
    this[_name] = value;
  }
  get email() {
    return this[_email];
  }
  set email(value) {
    this[_email] = value;
  }

  get age() {
    return this[_age];
  }
  set age(value) {
    this[_age] = value;
  }
  get address() {
    return this[_address];
  }
  set address(value) {
    this[_address] = value;
  }
  sendMsg() {
    console.log(`${this[_name]} sent message`);
    console.log(`${this[_email]} sent Email`);
  }
}

let p1 = new Person("Minal", "minal@gmail.com", 22, "Lalpur");

console.log(p1);
p1.name = "Tom";
p1.email = "tom@gmail.com";
p1.age = 20;
p1.address = "Natore";

console.log(p1);
