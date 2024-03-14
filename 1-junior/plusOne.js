// link => https://leetcode.com/problems/plus-one/description/

// Solution 1
const plusOne = function (digits) {
  let num = BigInt(digits.join(""));
  num += 1n;
  let res = String(num).split("");
  res = Array.from(res, (x) => +x);
  return res;
};

console.log(plusOne([1, 2, 3])); // [ 1, 2, 4 ]
