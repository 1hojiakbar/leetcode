// link => https://leetcode.com/problems/longest-common-prefix/description/

// Solution 1
// Runtime - 64ms / 19.16%
// Memory - 50.20mb / 33.22%
const longestCommonPrefix = function (strs) {
  let res = [];
  let letter = "";
  let head = strs[0];
  for (let i in head) {
    letter += head[i];
    let ar = strs.every((val) => {
      if (
        String(val).startsWith(letter) &&
        Object.is(val.slice(0, 1), head.slice(0, 1))
      ) {
        return true;
      }
    });
    res.push(ar);
  }
  let resIndex = res.filter((value) => value == true).length;
  if (resIndex > 0) {
    return head.slice(0, resIndex);
  } else {
    return "";
  }
};

// Solution 2
// Runtime - 66ms / 13.56%
// Memory - 51.70mb / 10.44%
const solution2 = function (strs) {
  let word = "";
  let arr = [];
  let res = [];
  for (let i in strs) {
    strs[i].split("").forEach((val) => {
      word += val;
      arr = strs.every(
        (value) => value.includes(word) && value.startsWith(word)
      );
      if (arr) {
        res.push(word);
      }
    });
  }

  if (res.length >= 1) {
    return res.at(-1);
  } else return "";
};

console.log(solution2(["flower", "flow", "flight"]));
