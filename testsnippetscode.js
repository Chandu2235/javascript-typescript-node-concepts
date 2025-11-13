
//1️⃣ Find Duplicates in an Array
const arr = [1, 2, 3, 2, 4, 5, 5];
const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicates); // [2, 5]
//Concept: Array iteration, filter(), indexOf()

//2️⃣ Remove Duplicates from an Array
const arr = [1, 2, 3, 2, 4, 5, 5];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4, 5]

//Set object — ensures only unique values.
//Reverse a String Without Built-in Reverse.

const str = "automation";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed); // "noitamotua"


//String manipulation & loops.
//Check if a String is a Palindrome
const str = "madam";
const isPalindrome = str === str.split('').reverse().join('');
console.log(isPalindrome); // true

//String and Array methods.
//Find Maximum and Minimum in an Array
const arr = [10, 5, 8, 20, 3];
console.log("Max:", Math.max(...arr)); // 20
console.log("Min:", Math.min(...arr)); // 3

//Spread operator, Math functions.

//Count Occurrences of Each Element
const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
const count = {};
arr.forEach(item => {
  count[item] = (count[item] || 0) + 1;
});
console.log(count); // { a: 3, b: 2, c: 1 }

//Concept: Object manipulation and frequency count.

//7️⃣ Swap Two Variables Without Third Variable
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b); // 20 10

//Destructuring assignment.

//Find Missing Number in a Sequence
const arr = [1, 2, 3, 5];
const n = 5; // expected range 1–5
const total = (n * (n + 1)) / 2;
const sum = arr.reduce((a, b) => a + b, 0);
console.log("Missing Number:", total - sum); // 4

//Mathematical formula & reduce().

//Reverse Each Word in a Sentence
const str = "Test Automation Engineer";
const reversed = str.split(' ')
  .map(word => word.split('').reverse().join(''))
  .join(' ');
console.log(reversed); // "tseT noitamotuA reenignE"

//Chaining split(), map(), and join().

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

//Filter Even and Odd Numbers
const arr = [1, 2, 3, 4, 5, 6];
const even = arr.filter(n => n % 2 === 0);
const odd = arr.filter(n => n % 2 !== 0);
console.log("Even:", even); // [2,4,6]
console.log("Odd:", odd);   // [1,3,5]

//1️⃣2️⃣ Flatten a Nested Array
const arr = [1, [2, [3, 4], 5], 6];
const flat = arr.flat(Infinity);
console.log(flat); // [1, 2, 3, 4, 5, 6]

//Array.flat() — handy in handling nested test data.
//1️⃣3️⃣ Remove White Spaces Without Built-in Trim
const str = "  Hello World  ";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ') result += str[i];
}
console.log(result); // "HelloWorld"

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

//1️⃣5️⃣ Find Sum Using Reduce
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum); // 15

//reduce() — very common for data validation or aggregation logic.

"Reverse a number"

"Find factorial using recursion"

"Check if two strings are anagrams"

"Difference between == and ==="

"How to handle asynchronous waits in JS?"


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
console.log(5 === "5"); // false (strict check)

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
//Convert Promise Chain → Async/Await
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

🧠 1️⃣4️⃣ What is Hoisting?
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

