// link => https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/description/

// Solution 1
// Runtime - 56ms / 36.07%
// Memory - 48.92mb / 35.57%
const minimumSum = function (num) {
  let nums = String(num)
    .split("")
    .sort((a, b) => a - b);
  with (nums) {
    return parseInt(nums[0] + nums[2]) + parseInt(nums[1] + nums[3]);
  }
};

console.log(minimumSum(2932)); // 52
