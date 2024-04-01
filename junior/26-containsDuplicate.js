// link => https://leetcode.com/problems/contains-duplicate/description/

// Solution 1
const containsDuplicate = function (nums) {
  let res = nums.map((value) => {
    if (nums.indexOf(value) !== nums.lastIndexOf(value)) {
      return true;
    } else return false;
  });
  return res.includes(true) ? true : false;
};

// #description: Bu yechim to'g'ri lekn agar array uzunligi juda katta bo'lsa bu kod ishlamaydi

// =======================================================

// Solution 2
// Runtime - 89ms / 29.67%
// Memory - 61.95mb / 57.17%
const solution = function (nums) {
  let set = new Set(nums).size !== nums.length;
  return set;
};

console.log(solution([1, 2, 3, 1]));
