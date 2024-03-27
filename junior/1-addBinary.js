// link => https://leetcode.com/problems/add-binary/description/

// Solution 1
// Runtime - 52ms / 80.65%
// Memory - 49.48mb / 69.39%
const addBinary = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

console.log(addBinary("11", "1")); // 100
