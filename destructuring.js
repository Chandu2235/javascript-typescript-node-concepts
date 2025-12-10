//🧠 8️⃣ What is Destructuring in JavaScript?
const userr = { name: "Chandrakant", role: "QA" };
const { naame, role } = user;
console.log(naame, role); // Chandrakant QA
//👉 In tests: Quickly extract values from API responses or test data objects.

//Destructuring & Template Literals (ES6+)
// Object
const user = {
  name: 'Chandu'
};
const { name } = user;
console.log(`Hello, ${name}!`);

//🧠 7️⃣ Swap Two Variables Without Third Variable
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b); // 20 10
//👉 Concept: Destructuring assignment.