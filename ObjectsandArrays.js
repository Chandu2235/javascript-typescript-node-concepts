// Object
const user = {
  name: 'Alice',
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

// Array
const colors = ['red', 'green', 'blue'];
// Array methods (ES6+)
colors.forEach(color => console.log(color));
const lengths = colors.map(color => color.length);
console.log(lengths);


//Objects in JavaScript

//Why? Because objects are everywhere in automation — test data, page objects, API payloads, configurations, utilities, and more.

//🔥 Why Objects Matter for Automation Testers
//✨ 1. What Is an Object?
//A collection of key–value pairs that represent data or behavior.
//In JavaScript, almost everything is an object.

//✨ 2. How Objects Help in Automation
//✔ Store structured test data
//✔ Build Page Object Models (POM)
//✔ Manage configs/env variables
//✔ Create reusable utility functions
//✔ Handle API responses cleanly

//🔑 Core Concepts You Should Know
//Object creation (literal, constructor, classes)
//Access & update properties
//Nested objects
//Object methods
//Destructuring
//Spread operator
//Object.freeze & immutability
//JSON vs Objects

//🧪 Simple Example for Testers
//Test data object:

const loginData = {
  username: "admin",
  password: "Pass123!",
  rememberMe: true
};
//Page Object Model:

class LoginPage {
  elements = {
    usernameInput: "#username",
    passwordInput: "#password",
    loginBtn: "#login"
  };

  login(user, pass) {
    // actions…
  }
}


//Calculate size of string without using length property
let str="Chandu college";
let size=0;
for(let i of str) //iterating through each character in the string for of loop
{
  console.log(i);
  size++;
}
console.log("Size of the string is ", size);

//for in vs for of loop in javascript - espcially for objects iterators and arrays  
//for of loop - iterates over values of an iterable (like arrays, strings)
//const colors=["Red", "Green", "Blue"];
const student={name:"Chandu", age:21, course:"B.Tech"};
for(let key in student) {
  console.log(key); //prints keys
  console.log(student[key]); //prints values
}

