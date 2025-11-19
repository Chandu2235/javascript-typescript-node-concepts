//String and Array methods.
//Concept: Object manipulation and frequency count.
//Destructuring assignment.
//Promise Example (Async Simulation)
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received!"), 1000);
  });
}

async function displayData() {
  const data = await fetchData();
  console.log(data); // "Data received!"
}

displayData();

//Promises, async/await — very common in automation test APIs or UI waits.

//1️⃣2️⃣ Flatten a Nested Array
const arr = [1, [2, [3, 4], 5], 6];
const flat = arr.flat(Infinity);
console.log(flat); // [1, 2, 3, 4, 5, 6]
//Array.flat() — handy in handling nested test data.

//String traversal — basic logic test.
//Debounce Function (Interview Advanced)
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const log = debounce(() => console.log("Button clicked!"), 1000);
log();
log(); // Only runs once after 1 second (not multiple times)

//Used in test frameworks to avoid repeated events — frequent advanced interview question.

//reduce() — very common for data validation or aggregation logic.

// 1️⃣ What is the difference between var, let, and const?
var a = 10;   // function-scoped
let b = 20;   // block-scoped
const c = 30; // block-scoped and cannot be reassigned

/*Key Points:

var is function-scoped and hoisted.
let and const are block-scoped.
const variables cannot be reassigned.
Prefer let and const in automation code to avoid scope leaks. */

///2️⃣ What are Arrow Functions and Why Use Them?
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
 
//Use in Automation:
//Arrow functions simplify callbacks in assertions or promises.
//They don’t have their own this, which is useful in framework contexts.

//3️⃣ Difference between == and ===
console.log(5 == "5");  // true (type conversion)
console.log(5 === "5"); // false (strict check) type and value both checked most prefered 

//Use in Tests:
//Always use === to avoid false positives in assertions.

//4️⃣ What is a Callback Function?
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
greet("Tester", () => console.log("Welcome to Automation!"));

//A callback is a function passed into another function to execute later — often used in waits or async test hooks.

//5️⃣ What are Promises?
let fetchData = new Promise((resolve) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData.then(result => console.log(result));

//Promises handle asynchronous operations (like API calls or UI waits).
//Convert Promise Chain → Async/Await most imp imp practical alysis 
async function runTest() {
  const data = await fetchData();
  console.log("Result:", data);
}
runTest();

//👉 Tip:
///Use async/await in tests for cleaner asynchronous flow (e.g. waiting for elements, API responses).

//7️⃣ How do you handle Asynchronous Operations in Tests?
//✅ Using async/await

await page.goto('https://example.com');
const title = await page.title();
console.log(title);
//Used in Playwright, WebDriverIO, Cypress, etc.


//8️⃣ What is Destructuring in JavaScript?
const user = { name: "Chandrakant", role: "QA" };
const { name, role } = user;
console.log(name, role); // Chandrakant QA

//In tests: Quickly extract values from API responses or test data objects.

//9️⃣ How do you Copy an Object or Array?
const arr = [1, 2, 3];
const copy = [...arr];
copy.push(4);
console.log(arr, copy);

//Avoid reference issues when working with reusable test data.

 //🔟 How do you Handle Exceptions in JavaScript?
try {
  throw new Error("Element not found!");
} catch (e) {
  console.error("Error:", e.message);
}

//In automation: Always wrap risky actions (like clicks or waits) in try–catch for better logs.

//1️⃣1️⃣ What is a Closure and Why Use It?
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  };
}
const count = outer();
console.log(count()); // 1
console.log(count()); // 2

//👉 Concept: Inner function remembers variables from outer scope.
//Useful for counters, state tracking, and data caching in test utilities.

// 1️⃣2️⃣ How to Iterate Over an Array or Object?
const arr = [10, 20, 30];
arr.forEach(num => console.log(num));
//👉 Concept: Use forEach, map, or for...of to process dynamic test data arrays.

// 1️⃣3️⃣ Example of map() and filter()
const nums = [1, 2, 3, 4, 5];
const even = nums.filter(n => n % 2 === 0);
const doubled = nums.map(n => n * 2);
console.log(even, doubled); // [2,4] [2,4,6,8,10]
//👉 Use in Tests: Filter or transform test data arrays dynamically.

//🧠 1️⃣4️⃣ What is Hoisting?
console.log(x); // undefined
var x = 5;

//Variable declarations (not initializations) are moved to the top during compilation.

//1️⃣5️⃣ What are Template Literals?
let name = "Automation";
console.log(`Welcome to ${name} Testing!`);

//Use in Tests:
//Build dynamic log messages or XPath locators.

//1️⃣6️⃣ Explain Spread vs Rest Operator
function sum(...nums) { return nums.reduce((a, b) => a + b); }
console.log(sum(1, 2, 3)); // 6

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]
//Spread (...arr) expands arrays.
//Rest (...args) collects parameters.

// 1️⃣7️⃣ What are Higher-Order Functions?
function multiply(x) {
  return function(y) {
    return x * y;
  };
}
console.log(multiply(2)(3)); // 6
//Functions that return other functions or take them as arguments.
//Used heavily in framework utility design.

// 1️⃣8️⃣ What is the Event Loop?

//JS is single-threaded.

//The Event Loop handles async callbacks via the callback queue and microtask queue.

//Ensures non-blocking execution — important in async test execution.

// 1️⃣9️⃣ Example of Default Parameters
function greet(name = "Tester") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Tester!

//Used in Tests:
//To handle missing or optional parameters (e.g. default browser, environment, or credentials).

// 2️⃣0️⃣ Object Destructuring from API Response
const response = { status: 200, data: { message: "Success" } };
const { status, data: { message } } = response;
console.log(status, message); // 200 Success


// Common in test automation for API response parsing.
/*
⚡ Bonus: Automation-Focused JavaScript Concepts
Topic	Why It Matters
Async/Await	Handle async browser/API actions cleanly
Promises	Manage waits & chained steps
Destructuring	Simplify data extraction from responses
Array Methods (map, filter, reduce)	Handle lists of elements/test data
Template Literals	Dynamic selectors & logs
try...catch	Graceful error handling during automation */


