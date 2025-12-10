// Simulating an API call using a Promise
function fetchUser() {
  // Returns a Promise that resolves after 1 second
  return new Promise((resolve) => {
    setTimeout(() => resolve("User fetched (Promise)"), 1000); // Simulates network delay
  });
}
// Consuming the Promise using .then()
fetchUser().then(console.log);   // Output after 1 second: User fetched (Promise)

// *************************************************

async function fetchUserAsync() // Now using async/await for the same function
{

  const result = await fetchUser(); // 'await' pauses execution until the Promise resolves
  console.log("User fetched (async/await):", result);
}

fetchUserAsync(); // Output after 1 second: User fetched (async/await): User fetched (Promise)

/*
 Situation                     |  Use Promise.then()            | Use async/await
Chaining multiple async calls    | ✅ Possible (but gets messy)  | ✅ Cleaner and more readable
Simple one-off async calls       | ✅ Works fine                 | ✅ Preferred for readability
Error handling                   | ❌ .catch() needed            | ✅ Use try/catch (more natural)
Inside array methods (map, etc.) | ✅ Easier with Promises       | ❌ Needs workarounds
Library-style or callback-style  | ✅ Often used in SDKs/APIs    | ✅ Use await when calling them
*/



//🧠 🔟 Promise Example (Async Simulation)
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
//👉 Concept: Promises, async/await — very common in automation test APIs or UI waits.

//🧠 6️⃣ Convert Promise Chain → Async/Await
async function runTest() {
  const data = await fetchData();
  console.log("Result:", data);
}
runTest();
//👉 Tip:
//Use async/await in tests for cleaner asynchronous flow (e.g. waiting for elements, API responses).

