// link => https://leetcode.com/problems/ransom-note/description/

// Solution 1
// Runtime - 78ms / 38.07%
// Memory - 53.93mb / 24.60%
const canConstruct = function (ransomNote, magazine) {
  let ar = magazine.split("");
  for (let i = 0; i < ransomNote.length; i++) {
    if (ar.indexOf(ransomNote[i]) === -1) return false;
    else ar.splice(ar.indexOf(ransomNote[i]), 1);
  }
  return true;
};

console.log(canConstruct("a", "b")); // false
