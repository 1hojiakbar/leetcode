// link => https://leetcode.com/problems/word-break/description/

// Solution 1
const wordBreak = function (s, wordDict) {
  let arr = [];
  let index = [];
  wordDict.forEach((value) => {
    arr.push(s.slice(s.indexOf(value)));
    index.push(s.indexOf(value));
  });
  arr.forEach((value, i) => {
    let reg = new RegExp(`${value}`, "g");
    console.log(s.match(reg).slice(index[i]));
  });
};

console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
console.log(wordBreak("bb", ["a", "b", "bbb", "bbbb"])); // true
