function countofvowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
const inputString = "Hello World";
const vowelCount = countofvowels(inputString);
console.log(`Number of vowels in "${inputString}":`, vowelCount);

/*
Q1. Difference between var, let, and const?

Answer:

var is function-scoped and hoisted with undefined

let and const are block-scoped and in Temporal Dead Zone

const prevents reassignment, not mutation

👉 EPAM checks if you understand scope + hoisting impact on async code

Q2. Explain hoisting with example

Answer:
Hoisting moves declarations to the top of the scope.

console.log(a); // undefined
var a = 10;


let and const throw ReferenceError because they are in TDZ.

Q3. What is closure? Where did you use it?

Answer:
A closure allows a function to access variables from its outer scope even after execution.

Automation example:
Used closures in:

Test retries

Logger utilities

Environment-based config readers

Q4. Explain event loop

Answer:

JS runs on a single-thread

Call stack executes sync code

Microtasks (Promises) execute before macrotasks (setTimeout)

Promise.then → microtask  
setTimeout → macrotask


👉 EPAM often asks execution order questions.

Q5. Difference between == and ===?

Answer:

== compares values with type coercion

=== compares value and type
Use === in automation to avoid unpredictable behavior.

2️⃣ Asynchronous JavaScript (HIGH PRIORITY)
Q6. What is a Promise?

Answer:
A Promise represents the result of an asynchronous operation with states:

pending

fulfilled

rejected

Used in automation for waits, API calls, browser actions.

Q7. async/await vs Promise.then?

Answer:

async/await is cleaner and more readable

Better debugging using try/catch

Built on top of Promises

EPAM expects you to prefer async/await.

Q8. What happens if you forget await?

Answer:
The function returns a Promise instead of the resolved value, leading to flaky tests.

const data = getData(); // ❌ Promise

Q9. Difference between Promise.all and Promise.allSettled?

Answer:

Promise.all fails fast if any promise rejects

Promise.allSettled waits for all promises

👉 EPAM LOVES this question.

3️⃣ JavaScript Coding (EPAM-style)
Q10. Reverse a string without built-in method
function reverse(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

Q11. Find duplicate elements in array
function duplicates(arr) {
  return arr.filter((v, i) => arr.indexOf(v) !== i);
}

Q12. Flatten nested array
function flatten(arr) {
  return arr.reduce((a, b) =>
    a.concat(Array.isArray(b) ? flatten(b) : b), []);
}

Q13. Remove falsy values
const clean = arr => arr.filter(Boolean);

Q14. Custom map()
Array.prototype.myMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

4️⃣ Automation Framework (EPAM Core Area)
Q15. Explain your framework architecture

Answer (Expected):

Test runner

Page Object / Screenplay

Utilities

Config & env handling

Reporting

CI integration

👉 EPAM checks design clarity, not tool names.

Q16. How do you handle flaky tests?

Answer:

Proper waits (not fixed sleep)

Reduce dependency on UI

Retry logic

Stabilize test data

Analyze root cause

Q17. How do you handle dynamic elements?

Answer:

Flexible locators

Relative selectors

Explicit waits

Avoid hard-coded XPath

5️⃣ Playwright / Cypress / WDIO (Tool-Agnostic Style)
Q18. Why Playwright over Selenium?

Answer:

Auto-waits

Faster execution

Parallel support

API + UI in single tool

Q19. Cypress limitations?

Answer:

Single browser tab

Limited cross-domain

Runs inside browser

Q20. How does Playwright handle waits?

Answer:
Implicit auto-waiting for:

Element to be visible

Enabled

Attached to DOM

6️⃣ API Automation (EPAM ALWAYS asks)
Q21. How do you validate API responses?

Answer:

Status code

Response schema

Business logic

Performance

Q22. Difference: PUT vs PATCH?

Answer:

PUT replaces entire resource

PATCH updates partial resource

Q23. Authentication types you used?

Answer:

Basic

OAuth 2.0

JWT

API keys

7️⃣ CI/CD & DevOps
Q24. How do you integrate tests into CI?

Answer:

Trigger on PR/commit

Run in headless mode

Publish reports

Fail pipeline on critical failures

Q25. How do you manage environment configs?

Answer:

.env files

Environment variables

Config-based test execution

8️⃣ Behavioral (EPAM-style)
Q26. Production issue but tests passed — what happened?

Answer:

Missing test scenarios

Data mismatch

Environment differences

Incorrect assertions

Q27. How do you mentor juniors?

Answer:

Code reviews

Pair programming

Framework walkthroughs

Best practice sharing

✅ EPAM Interview Final Tip (VERY IMPORTANT)

EPAM evaluates:
✅ Depth of JS fundamentals
✅ Clean async understanding
✅ Framework design thinking
✅ Communication clarity
*/
