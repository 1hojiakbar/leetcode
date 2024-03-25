// link => https://leetcode.com/problems/faulty-keyboard/description/

// Solution 1
// Runtime - 125ms / 7.09%
// Memory - 58.90mb / 17.85%
const splitWordsBySeparator = function (words, separator) {
  let res = [];
  for (let i in words) {
    res.push(words[i].split(separator).join(" ").trim());
  }
  res = res.join(" ").split(" ");
  res = res.filter((val) => val !== "");
  return res;
};

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], ".")); // ["one","two","three","four","five","six"]
