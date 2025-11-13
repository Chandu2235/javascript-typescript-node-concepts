// Variables (let, const, var)
const e=10
//a=20 //TypeError: Assignment to constant variable.
console.log(e)
let b=20 
b=30
console.log(b)
var c=40
c=50
console.log(c)

let name = 'Node.js';
const version = 20; //block scope 
//version=21; //TypeError: Assignment to constant variable.
var a=40;
console.log(a);
// Function declaration
function greet(user) {
  var a=10;  //function scope; //var and let redeclaration allowed.
  if(true){
    let a=20; //block scope
    console.log(a);
  }
  a=30;
  console.log(a);
  return `Hello, ${user}!`; // Template literal (ES6)
}

// Arrow function (ES6+)
const add = (a, b) => a + b;
console.log(greet('Developer')); // Hello, Developer!
console.log(add(5, 3)); // 8