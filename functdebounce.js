//🧠 1️⃣4️⃣ Debounce Function (Interview Advanced)
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const log = debounce(() => console.log("Button clicked!"), 1000);
log();
log(); // Only runs once after 1 second (not multiple times)
//👉 Concept: Used in test frameworks to avoid repeated events — frequent advanced interview question.
