// let user;
// console.log(username); // Runtime Error: Cannot read property 'name' of undefined
// null.toString()

try {
  let user;
  console.log(username);
} catch (error) {
  console.error("Error caught:", error.message);
  throw new Error("Custom error");
}


//🧠 9️⃣ How do you Copy an Object or Array?
const arr = [1, 2, 3];
const copy = [...arr];
copy.push(4);
console.log(arr, copy);
//👉 Avoid reference issues when working with reusable test data.

//🧠 🔟 How do you Handle Exceptions in JavaScript?
try {
  throw new Error("Element not found!");
} catch (e) {
  console.error("Error:", e.message);
}
//👉 In automation: Always wrap risky actions (like clicks or waits) in try–catch for better logs.