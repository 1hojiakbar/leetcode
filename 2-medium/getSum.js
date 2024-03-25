// link => https://leetcode.com/problems/sum-of-two-integers/description/

// Solution 1
// Runtime - 51ms / 52.75%
// Memory - 48.24mb / 91.16%
const getSum = function (a, b) {
  return eval([a, b].join("+"));
};
