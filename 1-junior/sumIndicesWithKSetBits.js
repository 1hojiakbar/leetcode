// link => https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/description/

// Solution 1
// Runtime - 108ms / 8.06%
// Memory - 56.19mb 12.26%
const sumIndicesWithKSetBits = function (nums, k) {
  let sum = 0;
  nums.forEach((val, i) => {
    if (eval(i.toString(2).split("").join("+")) == k) {
      sum += val;
    }
  });
  return sum;
};

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));
