/**
 * Advanced JavaScript Concepts Explained
 * A deep dive into the internal workings of JS.
 */

console.log("=== Advanced JavaScript Concepts ===\n");

// ---------------------------------------------------------
// 1. EVENT LOOP: Microtasks vs Macrotasks
// ---------------------------------------------------------
/*
 * The Event Loop orchestrates code execution.
 * - Stack: Synchronous code.
 * - Microtask Queue: Promises, queueMicrotask (High Priority).
 * - Macrotask Queue: setTimeout, setInterval, I/O (Lower Priority).
 * Logic: Execute Stack -> Drain Microtasks -> Execute 1 Macrotask -> Repeat.
 */
console.log("--- 1. Event Loop ---");

function eventLoopDemo() {
    console.log("1. Start (Sync)");

    setTimeout(() => {
        console.log("4. setTimeout (Macrotask)");
    }, 0);

    Promise.resolve().then(() => {
        console.log("3. Promise (Microtask)");
    });

    console.log("2. End (Sync)");
}
// Uncomment to run: 
// eventLoopDemo(); 
// Expected Order: 1, 2, 3, 4


// ---------------------------------------------------------
// 2. CLOSURES & LEXICAL SCOPE
// ---------------------------------------------------------
/*
 * Closure: A function bundled with references to its surrounding state (lexical environment).
 * It allows a function to access variables from an outer scope that has already returned.
 */
console.log("\n--- 2. Closures ---");

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}

const closureInstance = outerFunction("Persistent");
closureInstance("Instance 1"); // Outer: Persistent, Inner: Instance 1
closureInstance("Instance 2"); // Outer: Persistent, Inner: Instance 2


// ---------------------------------------------------------
// 3. HOISTING & TEMPORAL DEAD ZONE (TDZ)
// ---------------------------------------------------------
/*
 * Hoisting: Declarations are moved to the top of their scope during compilation.
 * - var: Hoisted and initialized with `undefined`.
 * - let/const: Hoisted but NOT initialized (TDZ). Accessing before declaration throws ReferenceError.
 * - function declarations: Fully hoisted.
 */

// console.log(hoistedVar); // undefined
var hoistedVar = "I am var";

// console.log(notHoistedLet); // ReferenceError
let notHoistedLet = "I am let";


// ---------------------------------------------------------
// 4. THIS BINDING
// ---------------------------------------------------------
/*
 * - Implicit: Object before the dot calls the function -> `obj.method()`.
 * - Explicit: call(), apply(), bind().
 * - New: `new Constructor()`.
 * - Window/Global: Default if strict mode is off (undefined in strict).
 * - Arrow Functions: Lexical `this` (inherits from parent scope).
 */
console.log("\n--- 4. 'this' Binding ---");

const person = {
    name: "Alice",
    greet: function () {
        console.log("Implicit:", this.name);
    },
    arrowGreet: () => {
        console.log("Arrow:", this.name); // undefined (in Node) or Window name
    }
};

person.greet(); // Alice
// person.arrowGreet(); // undefined


// ---------------------------------------------------------
// 5. PROTOTYPES & INHERITANCE
// ---------------------------------------------------------
/*
 * Every object has a [[Prototype]]. When a property is accessed, JS checks the object,
 * then its prototype, and so on (Prototype Chain).
 */
console.log("\n--- 5. Prototypes ---");

function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks
console.log("dog instanceof Animal:", dog instanceof Animal); // true


// ---------------------------------------------------------
// 6. CURRYING
// ---------------------------------------------------------
/*
 * Transforming a function f(a,b,c) into f(a)(b)(c).
 * Useful for partial application and functional composition.
 */
console.log("\n--- 6. Currying ---");

const multiply = (a) => (b) => a * b;
const double = multiply(2); // Partially applied

console.log("Double 5:", double(5)); // 10
console.log("Multiply 3 * 4:", multiply(3)(4)); // 12


/*

*/