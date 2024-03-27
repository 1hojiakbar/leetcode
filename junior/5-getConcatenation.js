// link => https://leetcode.com/problems/concatenation-of-array/description/

// Solution 1
// Runtime - 71ms / 28.99%
// Memory - 51.54mb / 79.16%
const getConcatenation = function (nums) {
  return [...nums, ...nums];
};
console.log(getConcatenation([1, 2, 1])); // [1, 2, 1, 1, 2, 1]
