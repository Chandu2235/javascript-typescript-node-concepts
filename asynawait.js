function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 5000);
    });
}

async function showName() {
    const name = await fetchName();
    console.log("Name is:", name);
}


console.log("Still Waiting..");
showName();


//🧠 7️⃣ How do you handle Asynchronous Operations in Tests?
//✅ Using async / await

await page.goto('https://example.com');
const title = await page.title();
console.log(title);
//👉 Used in Playwright, WebDriverIO, Cypress, etc.