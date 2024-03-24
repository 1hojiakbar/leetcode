// link => https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/description/

// Solution 1
// Runtime - 82ms / 6.07%
// Memory - 54.86MB / 5.61%
const cellsInRange = function (s) {
  let res = [];
  const selectNumRegExp = /\d/g;
  let arr = s.match(selectNumRegExp).map((val) => Number(val));
  let selectMaxNum = Math.max(...arr);
  const selectMinNum = Math.min(...arr);
  let initialIndex = s.split(":")[0][0].charCodeAt();
  let endIndex = s.split(":")[1][0].charCodeAt();
  for (let i = initialIndex; i <= endIndex; i++) {
    for (let j = selectMinNum; j <= selectMaxNum; j++) {
      res.push(`${String.fromCharCode(i)}${j}`);
    }
  }
  res = res.sort((a, b) => String(a).localeCompare(b));
  return res;
};

console.log(cellsInRange("K1:L2")); // ["K1","K2","L1","L2"]
