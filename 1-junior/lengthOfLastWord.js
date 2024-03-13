// link => https://leetcode.com/problems/length-of-last-word/description/

// Solution 1
const lengthOfLastWord = function (s) {
  if (!s.startsWith(" ") && !s.endsWith(" ")) {
    return s.split(" ").at(-1).length;
  } else if (s.startsWith(" ") || s.endsWith(" ")) {
    return s.trim().split(" ").at(-1).length;
  }
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6

// console.log("Blue red green".search("red"));
