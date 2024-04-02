// link

// Solution 1
// Runtime - 65ms / 26.76%
// Memory - 50.62mb / 61.14%
const findTheDifference = function (s, t) {
  s = s.split("").sort();
  t = t.split("").sort();
  for (let i in t) {
    if (s[i] !== t[i]) return t[i];
  }
};

console.log(findTheDifference("abcd", "abcde"));
