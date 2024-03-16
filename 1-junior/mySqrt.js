// link => https://leetcode.com/problems/sqrtx/description/

// Solution 1
// Runtime - 77ms / 50.63%
// Memory - 51.98mb / 85.01%
const solution1 = function (x) {
  if (x < 0 && x % 2 !== 0) {
    return x;
  } else return Math.trunc(x ** 0.5);
};

console.log(solution1(4));
console.log(solution1(8));

// Solution 2
const solution2 = function (x) {
  return Math.trunc(Math.sqrt(x));
};
