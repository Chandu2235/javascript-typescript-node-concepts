//https://javascript.info/hello-world - entire javascript coding
//https://www.typescriptlang.org/   typescript
//https://webdriver.io/ -wdio entire framework
//https://playwright.dev/ - playwright entire framework
//https://nodejs.org/en/ - node js
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide - javascript guide
//https://www.freecodecamp.org/ - freecodecamp
//https://www.w3schools.com/js/ - w3schools
//https://www.geeksforgeeks.org/javascript-tutorial/ - geeksforgeeks
//https://www.javatpoint.com/javascript-tutorial - javatpoint
//https://www.tutorialspoint.com/javascript/index.htm - tutorialspoint
function isAlphanumeric(str) {
    // /^[a-z0-9]+$/i → matches only letters and numbers, case-insensitive
    return /^[a-z0-9]+$/i.test(str);
}

const input = "Tester458";
console.log(isAlphanumeric(input)); // true
