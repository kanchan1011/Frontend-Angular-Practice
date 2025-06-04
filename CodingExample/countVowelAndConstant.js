function countVowelAndConstant(str) {
  const vowels = "aeiou";
  let vowelCount = 0;
  let constantCount = 0;

  for (let char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        constantCount++;
      }
    }
  }
  return { vowels: vowelCount, constants: constantCount };
}

const input = "Hello World";
const result = countVowelAndConstant(input);
console.log(`{ Vowels: ${result.vowels}, Constants: ${result.constants} }`);

/**
 * OUTPUT
 * 
 * PS E:\Kanchan\Angular\Assignment\CodingExample> node .\countVowelAndConstant.js
{ Vowels: 3, Constants: 7 }
 */
