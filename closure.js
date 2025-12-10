//🧠 1️⃣1️⃣ What is a Closure and Why Use It?
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