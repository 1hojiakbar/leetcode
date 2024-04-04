// link => https://leetcode.com/problems/majority-element/description/

// Solution 1
// Runtime - 67ms / 26.00%
// Memory - 54.13mb / 8.48%
const majorityElement = function (nums) {
  const sortArr = nums.toSorted((a, b) => a - b);
  return sortArr[~~(nums.length / 2)];
};

console.log(majorityElement([3, 2, 3])); // 3
