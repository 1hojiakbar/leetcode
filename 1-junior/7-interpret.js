// link => https://leetcode.com/problems/goal-parser-interpretation/description/

// Solution 1
// Runtime - 56ms / 36.81%
// Memory - 49.00MB / 48.33%
const interpret = function (command) {
  let res = command.replaceAll("()", "o");
  return res.match(/\p{Ll}/giu);
};

console.log(interpret("G()(al)")); // Goal
