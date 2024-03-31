// link => https://leetcode.com/problems/single-number/description/

// Solution 1
// Runtime - 694ms / 5.00%
// Memory - 50.37mb / 72.64%
const singleNumber = function (nums) {
  let res = 0;
  nums.forEach((value) => {
    if (nums.indexOf(value) === nums.lastIndexOf(value)) {
      res = value;
    }
  });

  return res;
};

console.log(singleNumber([2, 2, 1])); // 1
