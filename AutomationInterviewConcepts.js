/**
 * Automation Test Engineer - JavaScript Interview Concepts & Snippets
 * This file contains common patterns and questions you might face.
 */

// ---------------------------------------------------------
// 1. ASYNCHRONOUS HANDLING (Crucial for waiting on elements/APIs)
// ---------------------------------------------------------
console.log("--- 1. Asynchronous Handling ---");

// Q: How do you handle a custom wait condition that isn't built-in?
// A: Use a Promise-based polling mechanism.

const waitForCondition = (conditionFn, timeout = 2000) => {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const interval = setInterval(() => {
            if (conditionFn()) {
                clearInterval(interval);
                resolve("Condition met!");
            } else if (Date.now() - startTime > timeout) {
                clearInterval(interval);
                reject("Timeout waiting for condition.");
            }
        }, 100); // Poll every 100ms
    });
};

// Simulation
let isElementVisible = false;
setTimeout(() => { isElementVisible = true; }, 500); // Element appears after 500ms

(async () => {
    try {
        console.log("Waiting for element...");
        // Define condition: return true when element is visible
        const result = await waitForCondition(() => isElementVisible);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();


// ---------------------------------------------------------
// 2. ARRAY MANIPULATION (Parsing test data/Handling lists of elements)
// ---------------------------------------------------------
// console.log("--- 2. Array Manipulation ---"); // Keeping logs clean

// Q: Given a list of product prices strings ["$10.50", "$20.00", "$5.00"], 
//    filter out those greater than $10 and return just the numbers.

const pricesUnformatted = ["$10.50", "$20.00", "$5.00", "$12.99"];

const expensiveItems = pricesUnformatted
    .map(price => parseFloat(price.replace('$', ''))) // Clean data
    .filter(price => price > 10);                    // Filter logic

// console.log("Expensive items:", expensiveItems); // Expected: [10.5, 20, 12.99]


// ---------------------------------------------------------
// 3. PAGE OBJECT MODEL SIMULATION (Class Structures)
// ---------------------------------------------------------
// console.log("--- 3. Page Object Model ---");

// Q: How would you structure a basic login page object?

class BasePage {
    constructor() {
        this.url = "http://example.com";
    }
    async navigate(path) {
        // console.log(`Navigating to ${this.url}${path}`);
    }
}

class LoginPage extends BasePage {
    // Getters for selectors (Lazy loading is common pattern)
    get usernameInput() { return "#username"; }
    get passwordInput() { return "#password"; }
    get submitButton() { return "#submit"; }

    async login(user, pass) {
        // Example workflow
        // await type(this.usernameInput, user);
        // await type(this.passwordInput, pass);
        // await click(this.submitButton);
        console.log(`[Mock] Logged in user: ${user}`);
    }
}

// Usage
const loginPage = new LoginPage();
loginPage.login("testuser", "password123");


// ---------------------------------------------------------
// 4. SCOPE & CLOSURES (Test Data Isolation)
// ---------------------------------------------------------
// console.log("--- 4. Scope & Closure ---");

// Q: Why use closures in test data generation?
// A: To maintain state or generate unique IDs without global pollution.
const createIdGenerator = (prefix) => {
    let count = 0;
    return () => `${prefix}_${++count}`;
};

const getUserId = createIdGenerator("USER");
// console.log(getUserId()); // USER_1
// console.log(getUserId()); // USER_2
