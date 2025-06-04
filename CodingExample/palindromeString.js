function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

const input = "madam";
console.log("Palindrome or not: ", isPalindrome(input));

/**
 * OUTPUT
 * PS E:\Kanchan\Angular\Assignment\CodingExample> node .\palindromeString.js
Palindrome or not:  true
 */
