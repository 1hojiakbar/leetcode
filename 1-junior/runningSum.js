// link => https://leetcode.com/problems/running-sum-of-1d-array/description/

// Solution 1
// Runtime - 50ms / 90.41%
// Memory - 49.46mb / 96.21%
const runningSum = function (nums) {
  let sum = 0;
  return nums.map((value) => (sum += value));
};

console.log(runningSum([1, 2, 3, 4]));
