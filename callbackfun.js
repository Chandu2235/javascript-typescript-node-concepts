function waitWithCallback(ms, callback) {
  setTimeout(() => {
    callback(`⏳ Waited ${ms}ms (callback)`);
  }, ms);
}


console.log(" FUNCTION-01 Start (callback)");


waitWithCallback(3000, (msg) => {
  console.log(msg);
  console.log("FUNCTION2: End (callback)");
});


console.log("FUNCTION-03: This runs immediately after async call");


//🧠 4️⃣ What is a Callback Function?
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
greet("Tester", () => console.log("Welcome to Automation!"));
//A callback is a function passed into another function to execute later — often used in waits or async test hooks.