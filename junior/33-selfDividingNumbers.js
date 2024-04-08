// link => https://leetcode.com/problems/self-dividing-numbers/description/

// Solution 1
// Runtime - 46ms / 95.79%
// Memory - 49.37mb / 78.60%
const selfDividingNumbers = function (left, right) {
  let res = [];
  const dividingNums = (n) => {
    let strNum = String(n);
    for (let j = 0; j < strNum.length; j++) {
      if (strNum[j] === "0" || n % +strNum[j]) return false;
    }
    return true;
  };
  for (let i = left; i <= right; i++) {
    if (dividingNums(i)) res.push(i);
  }

  return res;
};

console.log(selfDividingNumbers(1, 22)); // [1,2,3,4,5,6,7,8,9,11,12,15,22]
