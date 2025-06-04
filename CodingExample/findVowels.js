let name = "Anoop Josep";

let vowelList = ["a", "e", "i", "o", "u"];
let foundVowels = [];

let vowels = name.match(/[aeiou]/gi);
console.log("Vowels by Reg Ex: ", vowels);

//Other Way
for (let char of name.toLowerCase()) {
  if (vowelList.includes(char)) {
    foundVowels.push(char);
  }
}
console.log("Vowels From given name: ", foundVowels);

let unquiVowels = [...new Set(foundVowels)];
console.log("Unqui Vowels From given name: ", unquiVowels);

/**
 * OUTPUT
 * PS E:\Kanchan\Angular\Assignment\CodingExample> node .\findVowels.js
 * Vowels by Reg Ex:  [ 'A', 'o', 'o', 'o', 'e' ]
Vowels From given name:  [ 'a', 'o', 'o', 'o', 'e' ]
Unqui Vowels From given name:  [ 'a', 'o', 'e' ]
 */
