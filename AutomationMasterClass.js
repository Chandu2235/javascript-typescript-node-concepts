/**
 * AUTOMATION MASTER CLASS - SENIOR SDET INTERVIEW PREP
 * 
 * Target Profile: 12+ Years Experience via JavaScript
 * Concepts Covered:
 * 1. Advanced Async Handling (Poller/Retry)
 * 2. Design Patterns (Singleton, Factory, Builder, Strategy)
 * 3. SOLID Principles in Test Architecture
 * 4. API Abstraction Layer
 * 
 * USAGE: Run this file with `node AutomationMasterClass.js`
 */

// ==========================================
// 1. CORE UTILITIES & ASYNC PATTERNS
// ==========================================
console.log("\n[1] --- CORE ASYNC PATTERNS ---");

/**
 * Advanced Retry Mechanism with Exponential Backoff
 * Demonstrates: Async/Await, Recursion/Loops, Robustness
 */
const retryOperation = async (fn, retries = 3, delay = 100) => {
    try {
        return await fn();
    } catch (err) {
        if (retries <= 0) throw err;
        console.log(`    Retrying... attempts left: ${retries}`);
        await new Promise(res => setTimeout(res, delay));
        return retryOperation(fn, retries - 1, delay * 2); // Exponential backoff
    }
};

// Simulation of unstable network call
let attempt = 0;
const unstableApiCall = async () => {
    attempt++;
    if (attempt < 3) throw new Error("Network Fluke");
    return "API Success Payload";
};

(async () => {
    try {
        const result = await retryOperation(unstableApiCall);
        console.log(`    Result: ${result}`);
    } catch (e) {
        console.error(`    Failed: ${e.message}`);
    }
})();


// ==========================================
// 2. DATA HANDLING (Immutable & Functional)
// ==========================================
console.log("\n[2] --- ADVANCED DATA HANDLING (Reduce/Map) ---");

const rawTestData = [
    { id: 101, category: "Electronics", price: 299.99, status: "available" },
    { id: 102, category: "Books", price: 19.99, status: "out_of_stock" },
    { id: 103, category: "Electronics", price: 499.50, status: "available" },
];

/**
 * Functional Programming for Data Aggregation
 * Interview Note: Prefer 'reduce' over 'forEach' for state summaries.
 */
const inventorySummary = rawTestData.reduce((acc, item) => {
    // 1. Group by Category
    if (!acc[item.category]) acc[item.category] = { totalValue: 0, count: 0 };

    // 2. filter logic inside reduce (efficient)
    if (item.status === 'available') {
        acc[item.category].totalValue += item.price;
        acc[item.category].count += 1;
    }
    return acc;
}, {});

console.log("    Inventory Summary:", JSON.stringify(inventorySummary));


// ==========================================
// 3. DESIGN PATTERNS (The "Architect" Level)
// ==========================================
console.log("\n[3] --- DESIGN PATTERNS ---");

// --- A. SINGLETON PATTERN (Configuration) ---
// Why: Ensure only one source of truth for env vars across all test files.
class ConfigManager {
    constructor() {
        if (ConfigManager.instance) return ConfigManager.instance;
        this.config = {
            baseUrl: "https://staging.api.com",
            timeout: 5000,
            browser: "chrome"
        };
        ConfigManager.instance = this;
    }

    get(key) { return this.config[key]; }
}
const config1 = new ConfigManager();
const config2 = new ConfigManager();
console.log(`    Singleton Works: ${config1 === config2}`); // true

// --- B. FACTORY PATTERN (Driver Creation) ---
// Why: Centralize browser instantiation logic. Easy to swap implementations (`OCP`).
class ChromeDriver { start() { return "Chrome Started"; } }
class FirefoxDriver { start() { return "Firefox Started"; } }

class BrowserFactory {
    static createDriver(type) {
        switch (type.toLowerCase()) {
            case 'chrome': return new ChromeDriver();
            case 'firefox': return new FirefoxDriver();
            default: throw new Error("Unsupported Browser");
        }
    }
}
const driver = BrowserFactory.createDriver(config1.get('browser'));
console.log(`    Factory Output: ${driver.start()}`);

// --- C. BUILDER PATTERN (Test Data) ---
// Why: Dealing with complex User objects with 20+ fields (Registration flows).
class UserProfile {
    constructor(builder) {
        this.username = builder.username;
        this.email = builder.email;
        this.isAdmin = builder.isAdmin || false;
        this.preferences = builder.preferences || {};
    }
}

class UserBuilder {
    constructor(username) {
        this.username = username;
    }
    withEmail(email) {
        this.email = email;
        return this; // Return 'this' for chaining
    }
    makeAdmin() {
        this.isAdmin = true;
        return this;
    }
    build() {
        return new UserProfile(this);
    }
}

const adminUser = new UserBuilder("admin_curr")
    .withEmail("admin@test.com")
    .makeAdmin()
    .build();
console.log("    Builder Result:", adminUser);


// ==========================================
// 4. SOLID PRINCIPLES IN AUTOMATION
// ==========================================
console.log("\n[4] --- SOLID PRINCIPLES ---");

// --- S: Single Responsibility Principle (SRP) ---
// Bad: PageObject handles Navigation, Validation, AND Logging.
// Good: Separate them.

class Logger {
    log(msg) { console.log(`      [LOG]: ${msg}`); }
}

class BasePage {
    constructor(logger) { this.logger = logger; } // D: Dependency Injection

    // Abstract method simulation
    verifyLoaded() { throw new Error("Method not implemented"); }
}

// --- O: Open/Closed Principle (OCP) ---
// Software entities should be Open for extension, Closed for modification.
// Example: We want to add a new Reporter without changing the TestRunner.

class TestRunner {
    constructor() { this.reporters = []; }

    subscribe(reporter) { this.reporters.push(reporter); }

    notify(event) {
        this.reporters.forEach(r => r.report(event));
    }
}

class ConsoleReporter {
    report(event) { console.log(`      [Console]: ${event}`); }
}

class JunitReporter {
    report(event) { console.log(`      [JUnit]: <testcase name="${event}" />`); }
}

const runner = new TestRunner();
runner.subscribe(new ConsoleReporter());
runner.subscribe(new JunitReporter()); // Added new functionality without touching TestRunner code!
runner.notify("Login Test Passed");


// ==========================================
// 5. API ABSTRACTION ARCHITECTURE
// ==========================================
console.log("\n[5] --- API LAYER ARCHITECTURE ---");

// Base HTTP Client (Axios wrapper simulation)
class HttpClient {
    async get(endpoint) {
        console.log(`      GET request to: ${endpoint}`);
        return { status: 200, data: { id: 1, name: "Test Item" } };
    }
    async post(endpoint, payload) {
        console.log(`      POST request to ${endpoint} with ${JSON.stringify(payload)}`);
        return { status: 201, id: 999 };
    }
}

// Service Object (Business Logic for API)
// Hides endpoints and HTTP methods from the actual test
class ProductService {
    constructor(httpClient) {
        this.client = httpClient;
        this.endpoint = "/api/v1/products";
    }

    async getProductById(id) {
        return this.client.get(`${this.endpoint}/${id}`);
    }

    async createProduct(productData) {
        // We can add "Default" data merging here
        const finalPayload = { ...productData, created_at: Date.now() };
        return this.client.post(this.endpoint, finalPayload);
    }
}

// Usage in Test
(async () => {
    const api = new ProductService(new HttpClient());
    await api.createProduct({ name: "New Gadget", price: 100 });
})();

console.log("\n--- END OF MASTER CLASS ---");
