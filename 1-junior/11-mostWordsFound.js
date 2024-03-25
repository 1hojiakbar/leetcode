// link => https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/

// Solution
// Runtime - 63ms / 21.75%
// Memory - 50.25mb / 94.02%
const mostWordsFound = function (sentences) {
  let res = [];
  sentences.map((val) => res.push(val.split(" ").length));
  return Math.max(...res);
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
