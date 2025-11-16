//Filter Even and Odd Numbers
const arr = [1, 2, 3, 4, 5, 6];
const even = arr.filter(n => n % 2 === 0);
const odd = arr.filter(n => n % 2 !== 0);
console.log("Even:", even); // [2,4,6]
console.log("Odd:", odd);   // [1,3,5]
