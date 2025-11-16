//Mathematical formula & reduce().

//Reverse Each Word in a Sentence
const str = "Test Automation Engineer";
const reversed = str.split(' ')
  .map(word => word.split('').reverse().join(''))
  .join(' ');
console.log(reversed); // "tseT noitamotuA reenignE"
//Chaining split(), map(), and join().