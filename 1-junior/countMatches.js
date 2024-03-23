// link => https://leetcode.com/problems/count-items-matching-a-rule/description/

// Solution 1
// Runtime - 63ms / 71.02%
// Memory - 52.20mb / 95.93%
const countMatches = function (items, ruleKey, ruleValue) {
  let res = 0;
  let ruleObj = {
    type: 0,
    color: 1,
    name: 2,
  };
  let index = ruleObj[ruleKey];
  items.forEach((item, i) => {
    if (item[index] == ruleValue) {
      res += 1;
    }
  });
  return res;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
); // 1
