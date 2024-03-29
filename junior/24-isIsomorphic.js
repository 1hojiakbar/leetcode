// link => https://leetcode.com/problems/isomorphic-strings/description/

// Solution 1
const isIsomorphic = function (s, t) {
  const defValue = [s, t];
  let bool = false;
  for (let i in s) {
    let reg = new RegExp(`${s[i]}`, "g");
    let regexp = new RegExp(`${t[i]}`, "g");
    if (
      s.match(reg).length > 1 &&
      s.match(reg).length <= 2 &&
      t.match(regexp).length > 1 &&
      t.match(regexp).length <= 2
    ) {
      s = s.replace(s[s.indexOf(s[i])], s[s.indexOf(s[i], i)]);
      t = t.replace(t[t.indexOf(t[i])], t[t.indexOf(t[i], i)]);
      if (s === defValue[0] && t === defValue[1]) bool = true;
    } else if (s === t) {
      bool = true;
    }
  }
  return bool;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("a", "a"));
console.log(isIsomorphic("aaeaa", "uuxyy"));
// console.log(isIsomorphic());
