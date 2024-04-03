// link => https://leetcode.com/problems/ransom-note/description/

// Solution 1
const canConstruct = function (ransomNote, magazine) {
  let rg = new RegExp(`[${ransomNote}]`, "g");
  if (magazine.startsWith(ransomNote) && rg.test(magazine)) {
    return ransomNote.split("").every((val, i) => val === magazine[i]);
  } else if (
    ransomNote.length == magazine.length &&
    !magazine.startsWith(ransomNote)
  ) {
    return ransomNote
      .split("")
      .reverse()
      .every((val, i) => val === magazine[i]);
  } else {
    return false;
  }
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
