let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6]

let usernames = ['user1', 'user2'];
let testUsers = usernames.map(u => ({ username: u, password: 'Test@123' }));
console.log(testUsers);

//🧠 1️⃣3️⃣ Example of map() and filter()
const nums = [1, 2, 3, 4, 5];
const even = nums.filter(n => n % 2 === 0);
const doubledd = nums.map(n => n * 2);
console.log(even, doubledd); // [2,4] [2,4,6,8,10]
//👉 Use in Tests: Filter or transform test data arrays dynamically.