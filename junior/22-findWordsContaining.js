// link => https://leetcode.com/problems/find-words-containing-character/description/

// Solution 1
// Runtime - 66ms / 91.19%
// Memory - 52.61mb / 78.77%
const findWordsContaining = function (words, x) {
  let index = [];
  words.forEach((value, i) => {
    if (value.includes(x)) index.push(i);
  });
  return index;
};

// Solution 2
// Runtime - 71ms / 75.78%
// Memory - 52.40mb / 89.21%
const solution2 = function (words, x) {
  let res = words.map((value, i) => {
    if (value.includes(x)) return i;
    else return "";
  });
  return res.filter((val) => val !== "");
};

console.log(solution2(["leet", "code"], "e")); // [0, 1]
