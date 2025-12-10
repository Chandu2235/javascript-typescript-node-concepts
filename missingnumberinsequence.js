//Find Missing Number in a Sequence
const arr = [1, 2, 3, 5];
const n = 5; // expected range 1–5
const total = (n * (n + 1)) / 2;
const sum = arr.reduce((a, b) => a + b, 0);
console.log("Missing Number:", total - sum); // 4
//👉 Concept: Mathematical formula & reduce().

