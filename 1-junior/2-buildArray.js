// link => https://leetcode.com/problems/build-array-from-permutation/description/

// Solution 1
// Runtime - 53ms / 93.80%
// Memory - 53.84mb / 35.26%
const buildArray = function (nums) {
  let res = [];
  nums.forEach((value) => res.push(nums[value]));
  return res;
};

console.log(buildArray([0, 2, 1, 5, 3, 4])); // [0,1,2,4,5,3]
