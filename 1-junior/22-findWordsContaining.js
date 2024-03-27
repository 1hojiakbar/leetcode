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

console.log(findWordsContaining(["leet", "code"], "e"));
