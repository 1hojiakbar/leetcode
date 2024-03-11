// link => https://leetcode.com/problems/longest-common-prefix/description/

// issue is number 14

// Solution 1
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

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
