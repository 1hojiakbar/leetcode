// link => https://leetcode.com/problems/isomorphic-strings/description/

// Solution 1
// Runtime - 69ms / 22.78%
// Memory - 54.35mb / 9.85%
const isIsomorphic = function (s, t) {
  let arr = [];
  if (s.length !== t.length) return false;
  for (let i in s) {
    arr.push(s.indexOf(s[i]));
    if (arr[i] !== t.indexOf(t[i])) return false;
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));

// #description: Meni bu yechim qoniqtirmadi bunga keyinroq yana boshqa yechim topaman
