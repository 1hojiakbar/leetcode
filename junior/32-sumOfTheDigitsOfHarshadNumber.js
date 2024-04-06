// link => https://leetcode.com/problems/harshad-number/description/

// Solution 1
// Runtime - 41ms / 96.40%
// Memory - 48.61MB / 66.55%
const sumOfTheDigitsOfHarshadNumber = function (x) {
  const defVal = x;
  let sum = 0;
  let res = String(x).split("");
  res.forEach((value) => {
    sum += +value;
  });
  if (defVal % sum === 0) return sum;
  else return -1;
};

console.log(sumOfTheDigitsOfHarshadNumber(18)); // 9
