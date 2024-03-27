// link => https://leetcode.com/problems/find-the-maximum-achievable-number/description/

// Solution 1
// Runtime - 93ms / 59.14%
// Memory - 53.73mb / 53.58%
const theMaximumAchievableX = function (num, t) {
  return (t *= 2) + num;
};

console.log(theMaximumAchievableX(4, 1)); // 6
