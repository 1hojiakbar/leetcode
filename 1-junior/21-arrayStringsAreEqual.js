// link => https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/

// Solution 1
// Runtime - 56ms / 32.74%
// Memory - 48.27mb / 97.23%
const arrayStringsAreEqual = function (word1, word2) {
  let str = word1.join("");
  let str2 = word2.join("");
  return Object.is(str, str2);
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])); // true
