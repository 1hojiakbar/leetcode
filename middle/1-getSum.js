// link => https://leetcode.com/problems/sum-of-two-integers/description/

// Solution 1
// Runtime - 38ms / 97.68%
// Memory - 48.45mb / 74.96%
const getSum = function (a, b) {
  return eval([a, b].join("+"));
};
