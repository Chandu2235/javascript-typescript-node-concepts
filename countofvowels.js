function countofvowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
const inputString = "Hello World";
const vowelCount = countofvowels(inputString);
console.log(`Number of vowels in "${inputString}":`, vowelCount);
