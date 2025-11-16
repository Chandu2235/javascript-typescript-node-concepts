//1️⃣3️⃣ Remove White Spaces Without Built-in Trim
const str = "  Hello World  ";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ') result += str[i];
}
console.log(result); // "HelloWorld"
