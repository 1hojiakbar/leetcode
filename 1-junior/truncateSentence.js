// link => https://leetcode.com/problems/truncate-sentence/description/

// Solution 1
// Runtime - 46ms / 87.16%
// Memory - 49.21mb / 14.48%
const solution1 = function (s, k) {
  let res = s.split(" ").slice(0, k).join(" ");
  return res;
};

// Solution 2
// Runtime - 55ms / 38.74%
// Memory - 48.88mb / 62.59%
const solution2 = function (...args) {
  let k = args.at(-1);
  return args[0].split(" ").slice(0, k).join(" ");
};

console.log(solution2("Hello how are you Contestant", 4)); // "Hello how are you"
