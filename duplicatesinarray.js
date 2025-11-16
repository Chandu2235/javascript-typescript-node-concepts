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
const arr = [1, 2, 3, 2, 4, 5, 5];
const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicates); // [2, 5]

function add(a, b) {
  const sum = a + b;
  return sum;
}

const result = add(2, 3);
console.log(result);


//2️⃣ Remove Duplicates from an Array
//const arr1 = [1, 2, 3, 2, 4, 5, 5];
const arr1 = [1, 2, 3, 2, 4, 5, 5];
const unique = [...new Set(arr1)];
console.log(unique); // [1, 2, 3, 4, 5]

//Set object — ensures only unique values.