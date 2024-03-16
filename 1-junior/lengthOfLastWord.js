// link => https://leetcode.com/problems/length-of-last-word/description/

// Solution 1
// Runtime - 48ms / 74.63%
// Memory - 48.73mb / 57.32%
const lengthOfLastWord = function (s) {
  if (!s.startsWith(" ") && !s.endsWith(" ")) {
    return s.split(" ").at(-1).length;
  } else if (s.startsWith(" ") || s.endsWith(" ")) {
    return s.trim().split(" ").at(-1).length;
  }
};

console.log(lengthOfLastWord("Hello World")); // 5
