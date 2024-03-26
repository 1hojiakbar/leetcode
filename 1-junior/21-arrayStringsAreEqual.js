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

// Solution 2
// Runtime - 55ms / 38.38%
// Memory - 49.04mb 46.02%
const solution2 = function (word1, word2) {
  let maxIndex = word1.join("").length;
  let str1 = "";
  let str2 = "";
  for (let i = 0; i <= maxIndex; i++) {
    if (word1[i] != undefined) str1 += word1[i];
    if (word2[i] != undefined) str2 += word2[i];
  }
  return str1 == str2;
};

console.log(solution2(["ab", "c"], ["a", "bc"]));
