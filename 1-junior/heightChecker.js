// link => https://leetcode.com/problems/height-checker/description/

const heightChecker = function (heights) {
  let count = 0;
  let ar = [...heights].toSorted((a, b) => a - b);
  heights.forEach((value, i) => {
    if (ar[i] !== value) {
      count++;
    }
  });
  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
