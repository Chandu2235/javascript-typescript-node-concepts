//Count Occurrences of Each Element
const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
const count = {};
arr.forEach(item => {
  count[item] = (count[item] || 0) + 1;
});
console.log(count); // { a: 3, b: 2, c: 1 }


//✅ 4. Character Frequency
function charCount(str) {
  return [...str].reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1;
    return acc;
  }, {});
}
console.log(charCount("hello"));

//Debounce (Very Common)
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

//✅ 6. Anagram Check
function isAnagram(a, b) {
  return a.split('').sort().join('') ===
    b.split('').sort().join('');
}


//✅ 7. Remove Falsy Values
const clean = arr => arr.filter(Boolean);

//✅ 8. Custom map()
Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

/*
1️⃣ Core JavaScript – Must-Ask (With Real Understanding)
✅ 1. var vs let vs const
Feature	var	let	const
Scope	Function	Block	Block
Hoisting	Yes (undefined)	Yes (TDZ)	Yes (TDZ)
Reassign	✅	✅	❌
Redeclare	✅	❌	❌

Key interviewer point:
👉 var causes bugs in async & loops.
👉 const does not mean immutable, object properties can change.

const user = { name: "QA" };
user.name = "SDET"; // ✅ allowed

✅ 2. Hoisting in JavaScript

Definition:
Variable and function declarations are moved to the top of their scope during compilation.

console.log(a); // undefined
var a = 10;


Why?

var a;        // hoisted
console.log(a);
a = 10;


🚨 let and const are hoisted but not initialized → Temporal Dead Zone

console.log(b); // ❌ ReferenceError
let b = 20;

✅ 3. Closures (🔥 Very Important)

Definition:
A closure lets a function remember variables from its outer scope even after execution.

✅ Real Automation Example
function createLogger(testName) {
  return function log(status) {
    console.log(`${testName} -> ${status}`);
  };
}

const loginTest = createLogger("Login Test");
loginTest("Passed");


✅ Used in:

Test retries

Logging

Config-based utilities

✅ 4. == vs ===
Operator	Comparison
==	Value only (type coercion)
===	Value + type
0 == "0"   // true
0 === "0"  // false ✅ preferred


✅ Rule: Use === in automation (predictable behavior).

✅ 5. Event Loop (Very Common Senior Question)
Execution Order:

Call Stack

Microtask Queue (Promises)

Macrotask Queue (setTimeout)

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");


Output:

Start
End
Promise
Timeout


✅ Promises run before timers.

✅ 6. Promises

A Promise represents a value available now, later, or never.

States:

Pending

Fulfilled

Rejected

const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });


Used heavily in:

API calls

UI waits

Playwright / Cypress internals

✅ 7. async/await vs .then()
.then()
fetchData().then(data => console.log(data));

async/await ✅ preferred
async function test() {
  const data = await fetchData();
  console.log(data);
}


✅ Cleaner
✅ Easier debugging
✅ Better error handling with try/catch

✅ 8. Callback Hell

❌ Bad:

login(() => {
  navigate(() => {
    submit(() => {
      logout();
    });
  });
});


✅ Fix:

Promises

async/await

Modular functions

✅ 9. Shallow vs Deep Copy
Shallow Copy
const obj2 = { ...obj1 };


⚠️ Nested objects still reference same memory

Deep Copy
const deep = JSON.parse(JSON.stringify(obj));


✅ Best for test data isolation

✅ 10. Scope
Scope	Defined
Global	Accessible everywhere
Function	Inside function
Block	{} with let/const
if (true) {
  let x = 10;
}
// x not accessible
*/

