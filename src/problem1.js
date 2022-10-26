function isArrayIncludesZero(nums) {
  return nums.includes(0);
}

function calcMaxNumber(num) {
  const nums = num.toString().split("").map(Number);

  if (isArrayIncludesZero(nums)) {
    return nums.reduce((a, b) => a + b, 0);
  }

  return Math.max(
    nums.reduce((a, b) => a * b, 1),
    nums.reduce((a, b) => a + b, 0)
  );
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
