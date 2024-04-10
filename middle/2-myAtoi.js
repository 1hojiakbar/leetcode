// link => https://leetcode.com/problems/string-to-integer-atoi/description/

// Solution 1
// Runtime - 77ms / 52.36%
// Memory - 52.36mb / 85.31%
const myAtoi = function (s) {
  const nums = parseInt(s);
  if (nums) {
    if (nums <= -2147483648) return -2147483648;
    else if (nums >= 2147483647) return 2147483647;
    else return nums;
  } else return 0;
};

console.log(myAtoi("42")); // 42
