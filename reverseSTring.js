//Reverse a String Without Built-in Reverse.

const str = "automation";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed); // "noitamotua"

//reverse string using function
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}


//reverse string in place
let a = ["h", "e", "l", "l", "o"];
reverseString(a);
console.log(a); // ["o","l","l","e","h"]

//reverse string in place
let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s); // ["o","l","l","e","h"]
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    // Swap characters
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
}