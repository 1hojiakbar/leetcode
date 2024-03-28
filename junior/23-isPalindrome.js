// link => https://leetcode.com/problems/valid-palindrome/description/

// Solution 1
// Runtime - 85ms / 7.29%
// Memory - 55.13mb / 22.79%
const isPalindrome = function (s) {
  let reg = /[a-zA-Z0-9]/g;
  let regexp = /[^a-zA-Z0-9]/g;
  if (String(s).match(reg) !== null) {
    let word = String(s).match(reg).join("").toLowerCase();
    let reversed = word.split("").toReversed().join("").toLowerCase();
    return word === reversed;
  } else if (s === " " || String(s).match(regexp) !== null) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
