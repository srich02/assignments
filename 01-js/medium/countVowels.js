/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Initialize a set of vowels (both lowercase and uppercase)
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Initialize a counter for vowels
  let count = 0;

  // Iterate through each character in the string
  for (let char of str) {
      // Check if the character is a vowel
      if (vowels.has(char)) {
          count++;
      }
  }

  return count;
}

module.exports = countVowels;