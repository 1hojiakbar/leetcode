// link =>

// Solution 1
const getConcatenation = function (nums) {
  return [...nums, ...nums];
};
console.log(getConcatenation([1, 2, 1])); // [1, 2, 1, 1, 2, 1]
