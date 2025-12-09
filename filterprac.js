let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]


let results = [{ testcase: 'smoke', status: 'pass' }, { testcase: 'sanity', status: 'fail' }];
let failedTests = results.filter(r => r.testcase === 'smoke');
console.log(failedTests);

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


👉  often asks execution order questions.

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

expects you to prefer async/await.

Q8. What happens if you forget await?

Answer:
The function returns a Promise instead of the resolved value, leading to flaky tests.

const data = getData(); // ❌ Promise

Q9. Difference between Promise.all and Promise.allSettled?

Answer:

Promise.all fails fast if any promise rejects

Promise.allSettled waits for all promises

👉  LOVES this question.

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

✅ Q1. Explain call stack overflow. How can it happen in automation?

Answer:
Call stack overflow happens due to uncontrolled recursion or deep synchronous calls.

function test() {
  test();
}


In automation:

Recursive retries without exit condition

Self-invoking hooks

✅ Fix: Base condition + limits.

✅ Q2. Explain memory leaks in JavaScript

Answer:
Memory leaks occur when objects remain referenced unnecessarily.

Common causes:

Global variables

Closures retaining old data

Unremoved event listeners

Long-running test suites

🔧 In automation:
Clear hooks, reuse browser contexts, avoid retaining page objects globally.

✅ Q3. What is garbage collection?

Answer:
JS uses mark-and-sweep GC.
Objects not reachable from root are collected.

👉 Important in long CI test runs.

✅ Q4. Explain prototype chain and this binding

Answer:
JS objects inherit properties through prototypes.

this depends on how a function is called, not where it’s defined.

obj.method() → this = obj  
func() → this = global/undefined


Critical when writing reusable utility functions.

⚙️ 2️⃣ Deep Async & Concurrency
✅ Q5. Difference: Promise.all vs race vs any vs allSettled
Method	Behavior
Promise.all	Fails fast
Promise.allSettled	Waits all
Promise.race	First settle wins
Promise.any	First fulfillment wins

✅ EPAM asks when to use which.

✅ Q6. How do you limit concurrency in async tests?

Answer:
Use queues, worker pools, or libraries like p-limit.

Reason:

Avoid API throttling

Prevent UI resource conflicts

✅ Q7. How do async hooks behave in frameworks?

Answer:
Frameworks await hook completion before next phase.

Mistake:
❌ Not returning/awaiting a Promise → test starts too early.

🧪 3️⃣ Automation Architecture & Design (BIG FOCUS)
✅ Q8. Page Object vs Screenplay Pattern

Answer:

POM tightly couples actions with pages

Screenplay focuses on actors + tasks + abilities

✅ Screenplay scales better for large test suites.

✅ Q9. How do you handle flaky automation statistically?

Answer:

Track flaky rate

Identify environmental vs code issues

Auto-quarantine unstable tests

RCA before retrying

👉 Flakes ≠ always retries.

✅ Q10. How do you design selector strategy?

Answer:
Preference:

Data attributes (data-testid)

Role-based selectors

Stable CSS
❌ Avoid brittle XPath based on position/text.

✅ Q11. How does Playwright auto-waiting work internally?

Answer:
It waits for:

DOM attachment

Visibility

Enabled state

Stability (non-moving)

This eliminates explicit sleeps.

✅ Q12. Parallel execution pitfalls

Answer:

Shared test data

Environment collisions

Session reuse bugs

✅ Solve using isolated contexts + test data generation.

🔌 5️⃣ Advanced API Automation
✅ Q13. How do you test async APIs?

Answer:

Polling strategies

Webhooks

Exponential backoff

Callback validations

✅ Q14. Contract testing vs Integration testing

Answer:

Contract: Schema & expectation verification

Integration: System-to-system behavior

Used for microservices stability.

✅ Q15. Idempotency in APIs? Why important?

Answer:
Ensures repeated requests don’t change state.
Critical for retriable automation tests.

🚧 6️⃣ CI/CD, Stability & Scaling
✅ Q16. Headless vs headed execution differences

Answer:

GPU rendering differences

Timing differences

Viewport issues

✅ Always validate in real browser once.

✅ Q17. Why do CI tests fail but pass locally?

Answer:

Resource constraints

Network latency

Browser differences

Timing issues

✅ Q18. Test pyramid vs test trophy

Answer:
Modern approach favors API & integration tests over excessive UI.

🧩 7️⃣ Debugging & Failure Analysis
✅ Q19. A test passes locally, flakes in CI. Steps?

Answer:

Reproduce in CI container

Enable tracing/video

Analyze async/waits

Review test data isolation

✅ Q20. How do you debug intermittent failures?

Answer:

Deterministic logging

Time travel debugging

Screenshot/video on failure

Retry with capture

✅ Q21. How do you decide what NOT to automate?

Answer:

High-change features

UI-heavy low-value paths

One-time flows

Automation ROI matters.

✅ Q22. Handling conflict with developers?

Answer:
Data-driven approach using metrics, not opinions.

*/