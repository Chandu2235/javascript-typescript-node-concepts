//1️⃣ Find Duplicates in an Array
//Concept: Array iteration, filter(), indexOf()
/*
Concepts Used
Array iteration
filter() → used to extract matching elements
indexOf() → used to find the first occurrence
Callback function
Duplicate detection logic

✅ Line-by-Line Explanation
1️⃣ const arr = [1, 2, 3, 2, 4, 5, 5];

You create an array that contains some duplicate values (2 and 5 appear more than once).

2️⃣ arr.filter((item, index) => ...)

.filter() loops through the array.

For each element, it will keep the element only if the callback function returns true.

It returns a new array containing only the elements that match the condition.

3️⃣ arr.indexOf(item)

indexOf(item) returns the first index at which the element appears.

Example:

arr.indexOf(2) → 1 (because value 2 first occurs at index 1)

arr.indexOf(5) → 5

4️⃣ Condition: arr.indexOf(item) !== index

This condition checks:

👉 Is the current index NOT the first index of this item?
If YES, then this element is a duplicate.

Breakdown:

Value	Current index	First index (indexOf)	Duplicate?
1	0	0	❌ No
2	1	1	❌ No
3	2	2	❌ No
2	3	1	✅ Yes
4	4	4	❌ No
5	5	5	❌ No
5	6	5	✅ Yes

So duplicates are [2, 5].

*/
//2️⃣ Remove Duplicates from an Array
const arr = [1, 2, 3, 2, 4, 5, 5];
const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicates); // [2, 5]

function add(a, b) {
  const sum = a + b;
  return sum;
}

const result = add(2, 3);
console.log(result);


//Set object — ensures only unique values.
//const arr1 = [1, 2, 3, 2, 4, 5, 5];
const arr1 = [1, 2, 3, 2, 4, 5, 5];
const unique = [...new Set(arr1)];
console.log(unique); // [1, 2, 3, 4, 5] //return only unique values from the array with set concept

//Arithmetic Operators in JavaScript and unary operators role in javascript 
let a = 3;
let b = 2;
console.log("a+b = ", a + b);
console.log("a++ = ", a++);//3 post increment operator
console.log("a = ", a);//4
console.log("b++ = ", b++);//2 post increment operator
console.log("b = ", b);//3

console.log("++a = ", ++a); 5// pre increment operator
console.log("a = ", a);//5
console.log("++b = ", ++b); 4// pre increment operator
console.log("b = ", b);//4

console.log("a-- = ", a--);//5 post decrement operator
console.log("a = ", a);//4
console.log("b-- = ", b--);//4 post decrement operator
console.log("b = ", b);//3

console.log("--a = ", --a);// 3 pre decrement operator
console.log("a = ", a);//3
console.log("--b = ", --b);//2 pre decrement operator
console.log("b = ", b);//2

console.log("a ** b = ", a ** b);//9
console.log("a=", a, "b=", b);//a=3 b=2

//ternary operator and switch case in javascript
let age = 18;
age >= 18 ? console.log("Eligible to vote") : console.log("Not eligible to vote");

//switch case example
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Yellow");
    break;

  case "apple":
    console.log("Red");
    break;

  default:
    console.log("Unknown");
}

//Check whether a number is divisible by 5 or not
let num = 25;
console.log("Enter the number");
if (num % 5 === 0)
  console.log("Divisible by 5");
else
  console.log("Not divisible by 5");


function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

//✅ 3. Flatten Nested Array
function flatten(arr) {
  return arr.reduce((acc, val) =>
    acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}
