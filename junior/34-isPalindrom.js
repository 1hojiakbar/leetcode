// link: https://leetcode.com/problems/palindrome-number/description/

// Solution 1
// Runtime - 130ms / 65.73%
// Memory - 56.87mb / 74.33%
const isPalindrome = function (x) {
  const res = String(x).split("").reverse().join("");
  if (`${x}`.length === 1) {
    return true;
  }

  if (res === String(x)) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121)); // true
