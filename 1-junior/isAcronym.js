// link => https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

// Solution 1
// Runtime - 92ms / 24.24%
// Memory - 53mb / 77.38%
const isAcronym = function (words, s) {
  let res = false;
  if (words.length == String(s).length) {
    res = words.every((val, i) => val[0] === s[i]) ? true : false;
  } else {
    res = words.every((val, i) => val[i] === s[i]) ? true : false;
  }
  return res;
};

console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy")); // true
