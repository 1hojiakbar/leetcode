// link => https://leetcode.com/problems/plus-one/description/

// Solution 1
// Runtime - 35ms / 99.64%
// Memory - 48.98mb / 34.27%
const plusOne = function (digits) {
  let num = BigInt(digits.join(""));
  num += 1n;
  let res = String(num).split("");
  res = Array.from(res, (x) => +x);
  return res;
};

console.log(plusOne([1, 2, 3])); // [ 1, 2, 4 ]
