// link => https://leetcode.com/problems/add-two-integers/description/

// Solution 1
// Runtime - 55ms / 40.70%
// Memory - 49.06mb / 21.41%
const solution1 = function (num1, num2) {
  return (num1 += num2);
};

// Solution 2
// Runtime - 59ms / 19.52%
// Memory - 49.30mb / 10.63%
const solution2 = function (num1, num2) {
  let res = eval(`${num1} + ${num2}`);
  return res;
};

// Solution 3
// Runtime - 59ms / 19.52%
// Memory - 48.38mb / 90.63%
const solution3 = function (num1, num2) {
  return num1 + num2;
};

console.log(solution1(12, 5)); // 17