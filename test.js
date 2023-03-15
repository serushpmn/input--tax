const Manager = {
  name: "Karina",
  age: 27,
  job: "Software Engineer",
};
const Intern = {
  name: "Tyrone",
  age: 21,
  job: "Software Engineer Intern",
};
function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}
// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;
Manager.sayHi(); // Hello, my name is Karina
Intern.sayHi(); // Hello, my name is Tyrone

let firstNameURL = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let age = document.getElementById("age");
let place = document.getElementById("location");
let career = document.getElementById("career");

const first_name = {
    URL: document.getElementById("first_name"),
    capital: 
};
console.log(first_name.pizza);
