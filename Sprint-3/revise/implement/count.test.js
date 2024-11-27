// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return `${char} appears ${count} times in "${str}"`;
}

console.log(countChar("laka", "a")); // a appears 2 times in "laka"
console.log(countChar("luke", "u")); // u appears 1 times in "luke"
console.log(countChar("heLLo", "l")); // l appears 0 times in "hello"
console.log(countChar("banana", "a")); // a appears 3 times in "banana"
console.log(countChar("abc", "z")); // z appears 0 times in "abc"
console.log(countChar("Mississippi", "s")); // s appears 4 times in "Mississippi"
