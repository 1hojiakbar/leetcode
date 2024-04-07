// link => https://leetcode.com/problems/shortest-completing-word/description/

// Solution 1
const shortestCompletingWord = function (licensePlate, words) {
  let ar = [];
  let index = 0;
  let count = 0;
  let letters = String(licensePlate)
    .split("")
    .join("")
    .match(/\S/g)
    .join("")
    .match(/\D/g);
  outer: for (let i = 0; i < words.length; i++) {
    let bool = letters.some(
      (val) => words[i].includes(val) && !isNaN(val) == false
    );
    if (bool) {
      for (let j in letters) {
        let reg = new RegExp(`${letters[j]}`, "gi");
        ar.push(words[i].match(reg)?.length);
      }
    } else continue;
  }
  for (let i = 0; i < words.length; i++) {
    // index = ar[0];
    console.log(ar[i]);
  }
  return words[index];
};

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);

console.log(
  shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
);

console.log(
  shortestCompletingWord("Ah71752", [
    "suggest",
    "letter",
    "of",
    "husband",
    "easy",
    "education",
    "drug",
    "prevent",
    "writer",
    "old",
  ])
);
