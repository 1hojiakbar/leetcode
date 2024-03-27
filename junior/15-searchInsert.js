// link => https://leetcode.com/problems/search-insert-position/

// Solution 1
// Runtime - 65ms / 5.05%
// Memory - 50.52 / 5.46%
const searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    let index = nums.findIndex((val) => val == target);
    return index;
  } else {
    nums.push(target);
    let sortArr = nums.toSorted((a, b) => a - b);
    let index = sortArr.findIndex((val) => val == target);
    return index;
  }
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
